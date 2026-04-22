import React from 'react'
import { Helmet } from 'react-helmet-async'
import { GamePlay } from '../components/matching/GamePlay'
import { Header } from '../components/layout/Header'

const Game: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light text-ink-old font-garamond selection:bg-gold-classic/30 flex flex-col relative overflow-hidden">
      <Helmet>
        <title>Game Ghép Thẻ | MLN122</title>
        <meta
          name="description"
          content="Trò chơi ghép thẻ tương tác giúp học hỏi về các khái niệm Triết học Mác - Lênin, Công nghiệp hóa."
        />
      </Helmet>

      <Header />

      {/* Game Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full flex flex-col items-center">
        <h1 className="text-4xl font-playfair text-sepia uppercase tracking-widest mb-2 text-center drop-shadow-sm">
          Kho Tàng Tri Thức
        </h1>
        <p className="text-ink-old/70 italic text-lg mb-10 text-center">
          Tìm kiếm sự tương đồng, nối kết chân lý để mở khóa các bài học lịch sử.
        </p>

        <GamePlay />
      </main>
    </div>
  )
}

export default Game
