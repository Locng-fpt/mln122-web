import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-sepia/20 bg-parchment-old mt-20 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Team Members */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-12 h-12 flex items-center justify-center border border-gold-classic/50 rounded-full mb-6 relative hover:scale-110 transition-transform duration-500 cursor-default">
            <div className="absolute inset-1 border border-dashed border-sepia/30 rounded-full"></div>
            <span className="text-sepia font-serif text-xl font-bold">M</span>
          </div>
          <h4 className="text-lg font-playfair text-sepia uppercase tracking-widest mb-6">Nhóm phát triển</h4>
          <ul className="space-y-3 text-sm font-garamond text-ink-old/80 w-full max-w-[250px] mx-auto md:mx-0">
            <li className="flex justify-between items-center border-b border-sepia/10 pb-1">
              <span>Trần Võ Quang Duy</span>
              <span className="font-mono text-xs opacity-60">Dev</span>
            </li>
            <li className="flex justify-between items-center border-b border-sepia/10 pb-1">
              <span>Lê Hoàng Tuấn</span>
              <span className="font-mono text-xs opacity-60">Nội dung</span>
            </li>
            <li className="flex justify-between items-center border-b border-sepia/10 pb-1">
              <span>Nguyễn Xuân Lộc</span>
              <span className="font-mono text-xs opacity-60">Design</span>
            </li>
            <li className="flex justify-between items-center border-b border-sepia/10 pb-1">
              <span>Lê Thành Minh Trung</span>
              <span className="font-mono text-xs opacity-60">Tester</span>
            </li>
          </ul>
        </div>

        {/* References */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-playfair text-sepia uppercase tracking-widest mb-6 md:mt-[72px]">Tài liệu tham khảo</h4>
          <ul className="space-y-4 text-sm font-garamond text-ink-old/80 leading-relaxed">
            <li className="flex items-start gap-2 justify-center md:justify-start">
              <span className="text-gold-classic mt-0.5">▪</span>
              <span>Giáo trình Kinh tế chính trị Mác - Lênin</span>
            </li>
            <li className="flex items-start gap-2 justify-center md:justify-start">
              <span className="text-gold-classic mt-0.5">▪</span>
              <span>Giáo trình Đường lối cách mạng của ĐCSVN</span>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-playfair text-sepia uppercase tracking-widest mb-6 md:mt-[72px]">Công cụ AI & Dev</h4>
          <ul className="space-y-4 text-sm font-garamond text-ink-old/80 leading-relaxed">
            <li className="flex items-start gap-2 justify-center md:justify-start">
              <span className="text-gold-classic mt-0.5">▪</span>
              <span>AI hỗ trợ: Claude Sonnet & Cursor AI</span>
            </li>
            <li className="flex items-start gap-2 justify-center md:justify-start">
              <span className="text-gold-classic mt-0.5">▪</span>
              <span>Công nghệ: React, Vite, Tailwind CSS</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-sepia/10 text-center">
        <p className="text-xs font-garamond text-ink-old/50 tracking-wide uppercase">
          © 2026 Nhóm SV FPT - Dự án MLN122. Hành trình vươn ra biển lớn.
        </p>
      </div>
    </footer>
  )
}
