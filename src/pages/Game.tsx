import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Game Data
const pairs = [
  { term1: "CNH, HĐH", term2: "Thời đại mới", explanation: "CNH, HĐH tạo cơ sở vật chất - kỹ thuật cho Chủ nghĩa xã hội trong thời đại mới, đưa đất nước phát triển." },
  { term1: "Cách mạng 4.0", term2: "Kinh tế tri thức", explanation: "Cách mạng công nghiệp 4.0 là nền tảng cốt lõi thúc đẩy quá trình chuyển dịch mạnh mẽ sang nền kinh tế tri thức." },
  { term1: "WTO", term2: "Hội nhập kinh tế", explanation: "Gia nhập WTO là dấu mốc quan trọng giúp Việt Nam hội nhập sâu rộng vào nền kinh tế toàn cầu, tuân thủ luật chơi chung." },
  { term1: "Việt Nam", term2: "ASEAN & EVFTA", explanation: "Việt Nam tích cực tham gia các hiệp định như EVFTA và cấu trúc khu vực ASEAN để mở rộng quy mô, thu hút đầu tư." },
  { term1: "Công nghệ số", term2: "Chuyển đổi số", explanation: "Công nghệ số là động lực chính trong công cuộc chuyển đổi số toàn diện của mọi mặt đời sống xã hội hiện nay." },
  { term1: "Công nghiệp hóa", term2: "Cơ cấu kinh tế", explanation: "Quá trình công nghiệp hóa luôn gắn liền với sự chuyển dịch cơ cấu kinh tế theo hướng tăng tỷ trọng công nghiệp và dịch vụ." },
  { term1: "Toàn cầu hóa", term2: "Hợp tác quốc tế", explanation: "Toàn cầu hóa vừa là thời cơ vừa là thách thức, đòi hỏi các quốc gia phải tăng cường hợp tác quốc tế để cùng phát triển." },
  { term1: "Nguồn nhân lực", term2: "Chất lượng cao", explanation: "Nguồn nhân lực chất lượng cao, đặc biệt là trí thức, đóng vai trò quyết định sự thành công của sự nghiệp CNH, HĐH." }
];

type CardType = {
  id: number;
  text: string;
  pairIndex: number;
};

const SHUFFLE_CARDS = (): CardType[] => {
  const cards: CardType[] = [];
  pairs.forEach((pair, index) => {
    cards.push({ id: index * 2, text: pair.term1, pairIndex: index });
    cards.push({ id: index * 2 + 1, text: pair.term2, pairIndex: index });
  });
  return cards.sort(() => Math.random() - 0.5);
};

const Game: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentMatch, setCurrentMatch] = useState<number | null>(null);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    setCards(SHUFFLE_CARDS());
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].pairIndex === cards[second].pairIndex) {
        // Matched
        setTimeout(() => {
          setMatched(prev => [...prev, first, second]);
          setCurrentMatch(cards[first].pairIndex);
          setShowModal(true);
          setFlipped([]);
        }, 500);
      } else {
        // Not Matched
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === pairs.length * 2 && matched.length > 0) {
      setTimeout(() => {
        setVictory(true);
      }, 1000);
    }
  }, [matched]);

  const handleCardClick = (index: number) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped(prev => [...prev, index]);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentMatch(null);
  };

  const restartGame = () => {
    setCards(SHUFFLE_CARDS());
    setFlipped([]);
    setMatched([]);
    setVictory(false);
    setShowModal(false);
    setCurrentMatch(null);
  };

  return (
    <div className="min-h-screen bg-parchment-light text-ink-old font-garamond selection:bg-gold-classic/30 flex flex-col relative overflow-hidden">
      <Helmet>
        <title>Game Ghép Thẻ | MLN122</title>
        <meta name="description" content="Trò chơi ghép thẻ tương tác giúp học hỏi về các khái niệm Triết học Mác - Lênin, Công nghiệp hóa." />
      </Helmet>

      {/* Header */}
      <header className="border-b border-gold-classic/30 bg-parchment-old/80 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-playfair font-bold text-sepia tracking-widest uppercase">
            MLN122
          </Link>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase items-center font-playfair">
            <Link to="/" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Trang chủ</Link>
            <Link to="/game" className="hover:text-gold-classic text-sepia transition-colors duration-300 border-b border-gold-classic">Game Ghép Thẻ</Link>
            <Link to="/theory" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Lý Thuyết</Link>
          </nav>
        </div>
      </header>

      {/* Game Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full flex flex-col items-center">
        <h1 className="text-4xl font-playfair text-sepia uppercase tracking-widest mb-2 text-center drop-shadow-sm">
          Kho Tàng Tri Thức
        </h1>
        <p className="text-ink-old/70 italic text-lg mb-10 text-center">
          Tìm kiếm sự tương đồng, nối kết chân lý để mở khóa các bài học lịch sử.
        </p>

        <div className="grid grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl perspective-1000">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matched.includes(idx);
            return (
              <motion.div
                key={idx}
                className="relative w-full aspect-[3/4] cursor-pointer"
                onClick={() => handleCardClick(idx)}
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Back (M logo) */}
                <div 
                  className={`absolute inset-0 w-full h-full backface-hidden bg-parchment-old border-2 border-sepia/50 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow ${isFlipped ? 'pointer-events-none' : ''}`}
                >
                  <div className="absolute inset-1 border border-dashed border-sepia/30"></div>
                  <span className="text-sepia/50 font-serif text-4xl font-bold">M</span>
                </div>

                {/* Front (Content) */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden bg-parchment-light border-2 border-gold-classic shadow-md flex items-center justify-center p-2 text-center"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="absolute inset-1 border border-solid border-gold-classic/20"></div>
                  <span className="font-playfair text-sm md:text-base font-bold text-sepia px-1">
                    {card.text}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Match Modal */}
      <AnimatePresence>
        {showModal && currentMatch !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-old/40 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-parchment-old p-8 md:p-12 border-2 border-gold-classic shadow-2xl max-w-xl text-center relative"
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-classic"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-classic"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-classic"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-classic"></div>
              
              <h3 className="text-2xl font-playfair text-sepia uppercase tracking-widest mb-4">
                Tuyệt Vời!
              </h3>
              <p className="font-garamond text-xl leading-relaxed text-ink-old">
                {pairs[currentMatch].explanation}
              </p>
              <button 
                onClick={closeModal}
                className="mt-8 px-8 py-3 bg-sepia text-parchment-light hover:bg-gold-classic transition-colors duration-300 font-playfair uppercase tracking-widest text-sm"
              >
                Tiếp Tục
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Victory Screen */}
      <AnimatePresence>
        {victory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-parchment-light"
          >
            <div className="max-w-2xl text-center px-6">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="mb-8"
              >
                <div className="text-6xl text-gold-classic mb-4 font-playfair">♛</div>
                <h2 className="text-4xl md:text-5xl font-playfair font-black text-sepia uppercase tracking-widest">
                  Hoàn Thành Tuyệt Sắc
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-8 border border-sepia/20 bg-parchment-old shadow-inner relative"
              >
                <div className="text-4xl text-gold-classic/40 mb-2 font-playfair leading-none">"</div>
                <p className="font-garamond italic text-sepia text-xl md:text-2xl leading-relaxed px-4">
                  Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau, vấn đề là cải tạo thế giới.
                </p>
                <div className="w-16 h-px bg-sepia/30 mx-auto mt-6 mb-4"></div>
                <div className="text-sm font-playfair text-ink-old uppercase tracking-widest">Karl Marx</div>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={restartGame}
                className="mt-12 px-8 py-4 bg-transparent border-2 border-sepia text-sepia hover:bg-sepia hover:text-parchment-light transition-all duration-500 font-playfair uppercase tracking-widest text-sm shadow-[4px_4px_0px_#433422] hover:shadow-[0px_0px_0px_#433422]"
              >
                Chơi Lại Từ Đầu
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
  );
};

export default Game;
