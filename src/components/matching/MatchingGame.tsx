import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { matchingPairs } from '../../data/matchingItems'
import type { Feedback, MatchingCard } from './types'

const RESOLVE_DELAY_MS = 1800
const DEFAULT_TIME_SECONDS = 150
const SCORE_MATCH = 100
const SCORE_MISMATCH_PENALTY = 10
const SCORE_TIME_BONUS_PER_SEC = 2

function shuffleCards(): MatchingCard[] {
  const cards: MatchingCard[] = []
  const shuffledPairs = [...matchingPairs].sort(() => Math.random() - 0.5)
  shuffledPairs.forEach((pair) => {
    const originalIndex = matchingPairs.indexOf(pair)
    cards.push({ id: `${originalIndex}-a`, text: pair.term1, pairIndex: originalIndex })
    cards.push({ id: `${originalIndex}-b`, text: pair.term2, pairIndex: originalIndex })
  })
  return cards.sort(() => Math.random() - 0.5)
}

type EndState = 'won' | 'timeout'
type Phase = 'idle' | 'playing' | 'finished'
type Resolution = { indices: [number, number]; result: 'match' | 'mismatch' } | null

export const MatchingGame: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle')
  const [cards, setCards] = useState<MatchingCard[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [isResolving, setIsResolving] = useState(false)
  const [resolution, setResolution] = useState<Resolution>(null)

  const [hintsLeft, setHintsLeft] = useState(3)
  const [hinted, setHinted] = useState<number[]>([])

  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME_SECONDS)
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)
  const [endState, setEndState] = useState<EndState | null>(null)
  const [finalScore, setFinalScore] = useState<number | null>(null)

  const [feedback, setFeedback] = useState<Feedback>({
    kind: 'info',
    title: 'Bắt đầu',
    body: 'Lật 2 thẻ để tìm cặp tương ứng. Đọc phần giải thích ngay bên dưới lưới thẻ.',
  })

  const matchedCount = matched.length
  const totalCards = cards.length
  const isPlaying = phase === 'playing' && endState === null

  useEffect(() => {
    setCards(shuffleCards())
  }, [])

  useEffect(() => {
    scoreRef.current = score
  }, [score])

  useEffect(() => {
    if (!isPlaying) return
    if (timeLeft <= 0) return

    const id = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) return 0
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(id)
  }, [isPlaying, timeLeft])

  useEffect(() => {
    if (!isPlaying) return
    if (timeLeft > 0) return

    setEndState('timeout')
    setPhase('finished')
    setFinalScore(scoreRef.current)
    setFeedback({
      kind: 'error',
      title: 'Hết giờ',
      body: 'Bạn đã hết thời gian. Hãy chụp màn hình điểm và thử lại để cải thiện thành tích.',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isPlaying])

  const bonusPreview = useMemo(() => {
    return Math.max(0, timeLeft) * SCORE_TIME_BONUS_PER_SEC
  }, [timeLeft])

  useEffect(() => {
    if (!isPlaying) return
    if (totalCards === 0) return
    if (matchedCount !== totalCards) return

    const bonus = timeLeft * SCORE_TIME_BONUS_PER_SEC
    const computedFinal = scoreRef.current + Math.max(0, bonus)
    setEndState('won')
    setPhase('finished')
    setFinalScore(computedFinal)
    setFeedback({
      kind: 'success',
      title: 'Hoàn thành',
      body: 'Bạn đã ghép đúng toàn bộ cặp. Điểm thưởng sẽ được cộng theo thời gian còn lại.',
    })
  }, [isPlaying, matchedCount, totalCards, timeLeft])

  useEffect(() => {
    if (!isPlaying) return
    if (isResolving) return
    if (flipped.length !== 2) return
    if (timeLeft <= 0) return

    setIsResolving(true)

    const [first, second] = flipped
    const firstCard = cards[first]
    const secondCard = cards[second]

    if (!firstCard || !secondCard) {
      setFlipped([])
      setIsResolving(false)
      return
    }

    const isMatch = firstCard.pairIndex === secondCard.pairIndex
    const pair = matchingPairs[firstCard.pairIndex]

    if (isMatch) {
      setResolution({ indices: [first, second], result: 'match' })
      setFeedback({
        kind: 'success',
        title: 'Ghép đúng',
        body: pair?.explanation ?? 'Bạn đã ghép đúng một cặp.',
      })
      window.setTimeout(() => {
        setMatched(prev => [...prev, first, second])
        setScore(prev => prev + SCORE_MATCH)
        setFlipped([])
        setIsResolving(false)
        setResolution(null)
      }, RESOLVE_DELAY_MS)
      return
    }

    setResolution({ indices: [first, second], result: 'mismatch' })
    const correctPair = matchingPairs[firstCard.pairIndex]
    setFeedback({
      kind: 'error',
      title: 'Chưa đúng',
      body: `Thẻ "${firstCard.text}" thực chất thuộc về "${firstCard.text === correctPair.term1 ? correctPair.term2 : correctPair.term1}".\n\nGiải thích: ${correctPair.explanation}`,
    })
    window.setTimeout(() => {
      setScore(prev => Math.max(0, prev - SCORE_MISMATCH_PENALTY))
      setFlipped([])
      setIsResolving(false)
      setResolution(null)
    }, RESOLVE_DELAY_MS)
  }, [cards, flipped, isPlaying, isResolving, timeLeft])

  const handleCardClick = (index: number) => {
    if (!isPlaying) return
    if (timeLeft <= 0) return
    if (isResolving) return
    if (flipped.length >= 2) return
    if (flipped.includes(index)) return
    if (matched.includes(index)) return

    setFlipped(prev => {
      const next = [...prev, index]
      if (next.length === 1) {
        setFeedback({
          kind: 'info',
          title: 'Chọn thêm 1 thẻ',
          body: 'Hãy lật thêm một thẻ để kiểm tra cặp tương ứng.',
        })
      }
      return next
    })
  }

  const handleHintClick = () => {
    if (!isPlaying || hintsLeft <= 0 || isResolving || flipped.length > 0) return

    const unmatchedCard = cards.find((c, idx) => !matched.includes(idx) && !hinted.includes(idx))
    if (!unmatchedCard) return

    const pairIndex = unmatchedCard.pairIndex
    const indicesToHint: number[] = []
    cards.forEach((c, idx) => {
      if (c.pairIndex === pairIndex) indicesToHint.push(idx)
    })

    if (indicesToHint.length === 2) {
      setHintsLeft(prev => prev - 1)
      setHinted(indicesToHint)
      setTimeout(() => {
        setHinted([])
      }, 2500)
    }
  }

  const restartGame = () => {
    setCards(shuffleCards())
    setFlipped([])
    setMatched([])
    setIsResolving(false)
    setResolution(null)
    setHinted([])

    setTimeLeft(DEFAULT_TIME_SECONDS)
    setHintsLeft(3)
    setScore(0)
    scoreRef.current = 0

    setEndState(null)
    setFinalScore(null)
    setPhase('idle')
    setFeedback({
      kind: 'info',
      title: 'Bắt đầu',
      body: 'Lật 2 thẻ để tìm cặp tương ứng. Đọc phần giải thích ngay bên dưới lưới thẻ.',
    })
  }

  const startGame = () => {
    setCards(shuffleCards())
    setFlipped([])
    setMatched([])
    setIsResolving(false)
    setResolution(null)
    setHinted([])

    setTimeLeft(DEFAULT_TIME_SECONDS)
    setHintsLeft(3)
    setScore(0)
    scoreRef.current = 0

    setEndState(null)
    setFinalScore(null)
    setPhase('playing')
    setFeedback({
      kind: 'info',
      title: 'Sẵn sàng',
      body: 'Hãy lật 2 thẻ để kiểm tra cặp tương ứng. Đọc giải thích sau mỗi lượt.',
    })
  }

  const feedbackStyles = useMemo(() => {
    if (feedback.kind === 'success')
      return {
        border: 'border-emerald-600/60',
        bg: 'bg-emerald-50/40',
        title: 'text-sepia',
      }
    if (feedback.kind === 'error')
      return {
        border: 'border-rose-600/60',
        bg: 'bg-rose-50/40',
        title: 'text-sepia',
      }
    return {
      border: 'border-sepia/25',
      bg: 'bg-parchment-old/70',
      title: 'text-sepia/90',
    }
  }, [feedback.kind])

  const feedbackIcon = useMemo(() => {
    if (feedback.kind === 'success') return '✓'
    if (feedback.kind === 'error') return '✕'
    return '❖'
  }, [feedback.kind])

  const getCardAccent = (idx: number) => {
    const isInResolution = resolution?.indices.includes(idx) ?? false
    if (isInResolution) return resolution?.result ?? null
    if (matched.includes(idx)) return 'match'
    return null
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* HUD */}
      <div className="w-full max-w-3xl mb-4 md:mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="px-4 py-2 border border-sepia/25 bg-parchment-old/70 shadow-inner font-playfair tracking-widest uppercase text-xs md:text-sm text-sepia">
            <span className="opacity-70">Thời gian:</span>{' '}
            <span className="font-bold">{phase === 'playing' ? `${timeLeft}s` : '--'}</span>
          </div>
          {phase === 'playing' && (
            <button 
              onClick={handleHintClick}
              disabled={hintsLeft <= 0 || isResolving || flipped.length > 0}
              className={`px-4 py-2 border border-sepia/25 shadow-inner font-playfair tracking-widest uppercase text-xs md:text-sm transition-colors ${hintsLeft > 0 && !isResolving && flipped.length === 0 ? 'bg-gold-classic/20 text-sepia hover:bg-gold-classic/40 cursor-pointer' : 'bg-parchment-old/50 text-sepia/40 cursor-not-allowed'}`}
            >
              💡 Gợi ý ({hintsLeft})
            </button>
          )}
        </div>
        <div className="px-4 py-2 border border-sepia/25 bg-parchment-old/70 shadow-inner font-playfair tracking-widest uppercase text-xs md:text-sm text-sepia text-right">
          <span className="opacity-70">Điểm:</span> <span className="font-bold">{score}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === 'idle' ? (
          <motion.div
            key="start-screen"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-3xl border border-sepia/25 bg-parchment-old/70 shadow-inner p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, rgba(67,52,34,1) 1px, transparent 1px), linear-gradient(rgba(67,52,34,1) 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-playfair uppercase tracking-widest text-sepia text-sm mb-2">Hướng dẫn</div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-black text-sepia uppercase tracking-widest mb-4">
                    Game Lật Thẻ
                  </h2>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sepia/70 font-playfair uppercase tracking-widest text-xs">
                  <span className="inline-flex items-center justify-center w-8 h-8 border border-sepia/20 bg-parchment-light">⌛</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 border border-sepia/20 bg-parchment-light">★</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-ink-old/90">
                <div className="border border-gold-classic/20 bg-parchment-light p-5 shadow-sm relative">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-classic/40"></div>
                  <div className="font-playfair uppercase tracking-widest text-xs text-sepia/80 mb-2">Luật chơi</div>
                  <ul className="font-garamond text-lg leading-relaxed space-y-2">
                    <li>- Lật 2 thẻ để tìm cặp tương ứng.</li>
                    <li>- Mỗi lượt sẽ có phản hồi đúng/sai rõ ràng.</li>
                    <li>- Đọc giải thích ngay sau mỗi lần chọn.</li>
                  </ul>
                </div>
                <div className="border border-gold-classic/20 bg-parchment-light p-5 shadow-sm relative">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-classic/40"></div>
                  <div className="font-playfair uppercase tracking-widest text-xs text-sepia/80 mb-2">Tính điểm & thời gian</div>
                  <ul className="font-garamond text-lg leading-relaxed space-y-2">
                    <li>- Thời gian: <span className="font-bold text-sepia">{DEFAULT_TIME_SECONDS}s</span> (bắt đầu đếm khi nhấn Start).</li>
                    <li>- Đúng: <span className="font-bold text-sepia">+{SCORE_MATCH}</span> điểm.</li>
                    <li>- Sai: <span className="font-bold text-sepia">-{SCORE_MISMATCH_PENALTY}</span> điểm.</li>
                    <li>- Thắng sớm: bonus <span className="font-bold text-sepia">+{SCORE_TIME_BONUS_PER_SEC}</span>/giây còn lại.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={startGame}
                  className="w-full sm:w-auto px-10 py-4 bg-sepia text-parchment-light hover:bg-gold-classic transition-colors duration-300 font-playfair uppercase tracking-widest text-sm shadow-[6px_6px_0px_rgba(67,52,34,0.35)] hover:shadow-[0px_0px_0px_rgba(67,52,34,0.35)]"
                >
                  BẮT ĐẦU GAME
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="play-area"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full"
          >
            {/* 2-column layout (left: grid, right: explanation) */}
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
              {/* Left: game grid */}
              <div className="w-full lg:flex-1">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full perspective-1000">
                  {cards.map((card, idx) => {
                    const isFlipped = flipped.includes(idx) || matched.includes(idx)
                    const accent = getCardAccent(idx)
                    const isMismatch = accent === 'mismatch'
                    const isMatch = accent === 'match'

                    return (
                      <motion.div
                        key={card.id}
                        className={`relative w-full aspect-[3/4] ${isPlaying ? 'cursor-pointer' : 'cursor-default'}`}
                        onClick={() => handleCardClick(idx)}
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{
                          rotateY: isFlipped ? 180 : 0,
                          x: isMismatch ? [0, -8, 8, -6, 6, 0] : 0,
                        }}
                        transition={{
                          rotateY: { duration: 0.6, type: 'spring', stiffness: 260, damping: 20 },
                          x: { duration: 0.45 },
                        }}
                      >
                        {/* Back (M logo) */}
                        <div
                          className={`absolute inset-0 w-full h-full bg-parchment-old border-2 ${isMismatch
                              ? 'border-rose-600/70'
                              : isMatch
                                ? 'border-emerald-600/70'
                                : 'border-sepia/50'
                            } flex items-center justify-center shadow-md hover:shadow-lg transition-shadow ${isFlipped ? 'pointer-events-none' : ''} ${hinted.includes(idx) && !isFlipped ? 'ring-4 ring-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 transition-all duration-300' : ''}`}
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                            willChange: 'transform',
                          }}
                        >
                          <div className="absolute inset-1 border border-dashed border-sepia/30"></div>
                          <span className="text-sepia/50 font-serif text-4xl font-bold">M</span>
                        </div>

                        {/* Front (Content) */}
                        <div
                          className={`absolute inset-0 w-full h-full bg-parchment-light border-2 ${isMismatch ? 'border-rose-600' : isMatch ? 'border-emerald-600' : 'border-gold-classic'
                            } shadow-md flex items-center justify-center p-2 text-center`}
                          style={{
                            transform: 'rotateY(180deg) translateZ(1px)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            willChange: 'transform',
                            boxShadow: isMatch
                              ? '0 0 0 2px rgba(16,185,129,0.15), 0 0 28px rgba(16,185,129,0.25)'
                              : isMismatch
                                ? '0 0 0 2px rgba(244,63,94,0.12)'
                                : undefined,
                          }}
                        >
                          <div className="absolute inset-1 border border-solid border-gold-classic/20"></div>
                          <span className="font-playfair text-sm md:text-base font-bold text-sepia px-1">
                            {card.text}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Right: explanation board */}
              <aside className="w-full lg:w-[380px] lg:min-w-[340px] lg:flex-none lg:sticky lg:top-28">
                <div
                  className={`border-2 ${feedbackStyles.border} ${feedbackStyles.bg} shadow-[10px_10px_0px_rgba(67,52,34,0.10)] p-6 md:p-7 relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 20% 20%, rgba(212,175,55,1), transparent 45%)',
                    }}
                  ></div>
                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex-none w-12 h-12 md:w-14 md:h-14 border-2 ${feedback.kind === 'success'
                          ? 'border-emerald-600/50 bg-emerald-50'
                          : feedback.kind === 'error'
                            ? 'border-rose-600/50 bg-rose-50'
                            : 'border-sepia/25 bg-parchment-light'
                        } text-sepia flex items-center justify-center font-playfair text-2xl md:text-3xl`}
                      aria-hidden
                    >
                      {feedbackIcon}
                    </div>

                    <div className="min-w-0">
                      <div className="font-playfair uppercase tracking-widest text-base md:text-lg text-sepia mb-1">
                        {feedback.title}
                      </div>
                      <div className="font-garamond text-lg md:text-xl text-ink-old/90 leading-relaxed">
                        {feedback.body}
                      </div>

                      <div className="mt-4 text-xs md:text-sm font-playfair uppercase tracking-widest text-sepia/70 flex flex-col gap-2">
                        <span>
                          Tiến độ:{' '}
                          <span className="font-bold text-sepia">{matchedCount / 2}</span>/
                          <span className="font-bold text-sepia">{totalCards / 2}</span> cặp
                        </span>
                        {phase === 'playing' ? (
                          <span>
                            Bonus (nếu thắng):{' '}
                            <span className="font-bold text-sepia">+{bonusPreview}</span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* End screen */}
      <AnimatePresence>
        {endState !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-parchment-light p-4"
          >
            <div className="max-w-2xl w-full text-center px-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="mb-8"
              >
                <div className="text-6xl text-gold-classic mb-4 font-playfair">
                  {endState === 'won' ? '♛' : '⌛'}
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-black text-sepia uppercase tracking-widest">
                  {endState === 'won' ? 'Chiến Thắng' : 'Game Over'}
                </h2>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="p-8 border border-sepia/20 bg-parchment-old shadow-inner relative"
              >
                <div className="text-sm font-playfair text-ink-old uppercase tracking-widest mb-2">
                  Tổng điểm cuối cùng
                </div>
                <div className="text-5xl md:text-6xl font-playfair font-black text-sepia tracking-widest">
                  {finalScore ?? score}
                </div>
                <div className="w-16 h-px bg-sepia/30 mx-auto mt-6 mb-4"></div>
                <div className="font-garamond italic text-sepia text-lg md:text-xl leading-relaxed px-4">
                  {endState === 'won'
                    ? `Bạn còn ${timeLeft}s. Bonus: +${Math.max(0, timeLeft) * SCORE_TIME_BONUS_PER_SEC}.`
                    : 'Hãy chụp màn hình để thi đấu cùng bạn bè.'}
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                onClick={restartGame}
                className="mt-10 px-8 py-4 bg-transparent border-2 border-sepia text-sepia hover:bg-sepia hover:text-parchment-light transition-all duration-500 font-playfair uppercase tracking-widest text-sm shadow-[4px_4px_0px_#433422] hover:shadow-[0px_0px_0px_#433422]"
              >
                Chơi Lại
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}

