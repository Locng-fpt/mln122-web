import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light text-ink-old font-garamond selection:bg-gold-classic/30">
      {/* Header */}
      <header className="border-b border-gold-classic/30 bg-parchment-old/80 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-playfair font-bold text-sepia tracking-widest uppercase">
            MLN122
          </div>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase items-center font-playfair">
            <a href="#" className="hover:text-gold-classic text-sepia transition-colors duration-300">Trang chủ</a>
            <a href="#" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Game Ghép Thẻ</a>
            <a href="#" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Lý Thuyết</a>
            <a href="#" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Về Chúng Tôi</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Subtle noise texture overlay using SVG data URI for classic academic feel */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-16 h-px bg-gold-classic mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-playfair font-black text-sepia tracking-tight mb-6 uppercase drop-shadow-sm">
              Triết học Mác - Lênin
            </h1>
            <p className="text-xl md:text-2xl italic text-ink-old/80 mb-12 max-w-2xl leading-relaxed">
              Học thuyết khoa học và cách mạng cho thời đại mới.
            </p>
            <button className="px-8 py-4 bg-transparent border-2 border-sepia text-sepia hover:bg-sepia hover:text-parchment-light transition-all duration-500 font-playfair uppercase tracking-widest text-sm shadow-[4px_4px_0px_#433422] hover:shadow-[0px_0px_0px_#433422] hover:-translate-y-px hover:translate-x-px">
              Bắt đầu khám phá
            </button>
            <div className="w-16 h-px bg-gold-classic mt-16"></div>
          </div>
        </section>

        {/* Content Layout: Book page style */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Area (Sections) */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Section 1: Cảm hứng triết học */}
            <article className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              <h2 className="text-3xl font-playfair text-sepia border-b border-gold-classic/20 pb-4 mb-8 uppercase tracking-wider">
                Cảm hứng Triết học
              </h2>
              <div className="bg-parchment-old/50 p-8 md:p-12 border border-gold-classic/20 shadow-sm relative">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-classic/50"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-classic/50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-classic/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-classic/50"></div>
                
                <h3 className="text-2xl font-playfair text-sepia mb-6 !mt-0">Thế giới quan & Phương pháp luận</h3>
                <p className="first-letter:text-6xl first-letter:font-playfair first-letter:text-gold-classic first-letter:float-left first-letter:mr-3 first-letter:leading-none leading-loose text-lg text-justify mb-6">
                  Triết học Mác - Lênin không chỉ giải thích thế giới mà còn trang bị cho con người công cụ nhận thức sắc bén để cải tạo thế giới. Sự thống nhất hữu cơ giữa thế giới quan duy vật biện chứng và phương pháp luận biện chứng duy vật tạo nên hạt nhân lý luận của triết học.
                </p>
                <p className="leading-loose text-lg text-justify !mb-0">
                  Qua từng trang sách, từng khái niệm như vật chất, ý thức, các quy luật lượng - chất, mâu thuẫn hay phủ định của phủ định, chúng ta thấy được bức tranh toàn cảnh về sự vận động không ngừng của tự nhiên, xã hội và tư duy.
                </p>
              </div>
            </article>

            {/* Section 2: Game Ghép Thẻ */}
            <article>
              <h2 className="text-3xl font-playfair text-sepia border-b border-gold-classic/20 pb-4 mb-8 uppercase tracking-wider">
                Học thuyết qua Trò chơi
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-parchment-old to-parchment-light border border-sepia/20 p-8 shadow-[8px_8px_0px_rgba(67,52,34,0.1)] transition-transform hover:-translate-y-1 duration-300">
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair text-sepia mb-4 flex items-center gap-3">
                    <span className="text-gold-classic">♦</span> Game Ghép Thẻ Cổ Điển
                  </h3>
                  <p className="mb-6 text-ink-old/80 leading-relaxed text-justify text-lg">
                    Thử thách trí nhớ và sự am hiểu của bạn về các quy luật, phạm trù triết học thông qua tựa game ghép bài mang phong cách thư viện cổ kính. Tìm kiếm sự tương đồng, nối kết chân lý.
                  </p>
                  <button className="px-6 py-3 border border-sepia text-sepia hover:bg-sepia hover:text-parchment-light transition-colors duration-300 font-playfair uppercase tracking-wider text-sm">
                    Khám phá Game
                  </button>
                </div>
                {/* Visual placeholder for Game Cards */}
                <div className="w-full md:w-56 h-72 bg-parchment-light border-2 border-sepia/30 flex items-center justify-center p-4 relative group cursor-pointer shadow-md">
                  <div className="absolute inset-2 border border-dashed border-sepia/40"></div>
                  <div className="text-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-5xl text-gold-classic mb-4">♠</div>
                    <div className="font-playfair text-sm uppercase tracking-widest text-sepia leading-loose">Quy luật<br/>Lượng - Chất</div>
                  </div>
                  {/* Stack effect */}
                  <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-sepia/20 bg-parchment-light -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sepia/10 bg-parchment-old -z-20"></div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar (Quick Links/TOC) */}
          <aside className="lg:col-span-4 self-start sticky top-32">
            <div className="border-l border-sepia/20 pl-8">
              <h3 className="text-lg font-playfair text-sepia uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-6 h-px bg-gold-classic"></span> Mục lục
              </h3>
              <ul className="space-y-6">
                {[
                  "Chủ nghĩa duy vật biện chứng",
                  "Phép biện chứng duy vật",
                  "Chủ nghĩa duy vật lịch sử"
                ].map((item, index) => (
                  <li key={index} className="group relative">
                    <a href={`#chapter-${index}`} className="block text-lg font-garamond text-ink-old/80 group-hover:text-sepia transition-colors pr-4 leading-relaxed">
                      <span className="text-gold-classic opacity-70 font-playfair text-sm mr-2 block mb-1">Chương {index + 1}</span>
                      {item}
                    </a>
                    {/* Hover decorative underline */}
                    <div className="h-px w-0 bg-gold-classic group-hover:w-full transition-all duration-500 ease-out mt-2"></div>
                  </li>
                ))}
              </ul>
              
              {/* Quote Block */}
              <div className="mt-16 p-6 border border-sepia/10 bg-parchment-old shadow-inner text-center">
                <div className="text-4xl text-gold-classic/40 mb-2 font-playfair leading-none">"</div>
                <p className="font-garamond italic text-sepia text-lg leading-relaxed px-4">
                  Trở ngại lớn nhất cho việc khám phá sự thật không phải là sự giả dối, mà là niềm tin rỗng tuếch.
                </p>
                <div className="w-12 h-px bg-sepia/30 mx-auto mt-6 mb-3"></div>
                <div className="text-xs font-playfair text-ink-old uppercase tracking-widest">Karl Marx</div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-sepia/20 bg-parchment-old mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center border border-gold-classic/50 rounded-full mb-6 relative hover:scale-110 transition-transform duration-500 cursor-default">
            <div className="absolute inset-1 border border-dashed border-sepia/30 rounded-full"></div>
            <span className="text-sepia font-serif text-xl font-bold">M</span>
          </div>
          <p className="text-sm font-playfair uppercase tracking-widest text-sepia mb-3">
            Trí tuệ — Chân lý — Cách mạng
          </p>
          <p className="text-sm font-garamond text-ink-old/60 tracking-wide">
            © 2026 Nhóm SV FPT - Dự án MLN122. Triết học - Ánh sáng của chân lý.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
