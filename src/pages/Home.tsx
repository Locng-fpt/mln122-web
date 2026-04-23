import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/layout/Header'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light text-ink-old font-garamond selection:bg-gold-classic/30">
      <Helmet>
        <title>MLN122 - Công nghiệp hóa, Hiện đại hóa</title>
        <meta name="description" content="Trang web trình bày Lý thuyết và Game tương tác về Triết học Mác - Lênin: Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế tại Việt Nam." />
        <meta property="og:title" content="MLN122 - Công nghiệp hóa, Hiện đại hóa" />
        <meta property="og:description" content="Dự án nhóm môn Triết học giới thiệu về CNH, HĐH và Hội nhập." />
      </Helmet>

      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-sepia/5 to-transparent">
          {/* Decorative background instead of image for clean look */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, rgba(67,52,34,1) 1px, transparent 1px), linear-gradient(rgba(67,52,34,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <div className="w-16 h-px bg-gold-classic mb-8"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-black text-sepia tracking-tight mb-6 uppercase drop-shadow-sm leading-tight">
              Công nghiệp hóa, Hiện đại hóa<br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gold-classic mt-4 block">Và Hội Nhập Kinh Tế</span>
            </h1>
            <p className="text-lg md:text-xl italic text-ink-old/80 mb-12 max-w-3xl leading-relaxed">
              Hành trình vươn ra biển lớn của Việt Nam trong kỷ nguyên công nghệ và toàn cầu hóa.
            </p>
            <a href="#muc-luc" className="inline-block px-8 py-4 bg-transparent border-2 border-sepia text-sepia hover:bg-sepia hover:text-parchment-light transition-all duration-500 font-playfair uppercase tracking-widest text-sm shadow-[4px_4px_0px_#433422] hover:shadow-[0px_0px_0px_#433422] hover:-translate-y-px hover:translate-x-px">
              Bắt đầu khám phá
            </a>
            <div className="w-16 h-px bg-gold-classic mt-16"></div>
          </div>
        </section>

        {/* Content Layout: Book page style */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Area (Sections) */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Section 1: Hành trình Đổi Mới */}
            <article className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              <h2 className="text-3xl font-playfair text-sepia border-b border-gold-classic/20 pb-4 mb-8 uppercase tracking-wider">
                Hành trình Đổi Mới
              </h2>
              <div className="bg-parchment-old/50 p-8 md:p-12 border border-gold-classic/20 shadow-sm relative">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-classic/50"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-classic/50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-classic/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-classic/50"></div>
                
                <h3 className="text-2xl font-playfair text-sepia mb-6 !mt-0">Từ Đổi mới đến Hội nhập toàn diện</h3>
                <p className="first-letter:text-6xl first-letter:font-playfair first-letter:text-gold-classic first-letter:float-left first-letter:mr-3 first-letter:leading-none leading-loose text-lg text-justify mb-6">
                  Đại hội VI (1986) của Đảng Cộng sản Việt Nam đã mở ra một kỷ nguyên mới, chuyển đổi nền kinh tế đất nước sang cơ chế thị trường định hướng xã hội chủ nghĩa. Đây là bước ngoặt mang tính lịch sử, giải phóng sức sản xuất và khơi dậy tiềm năng to lớn của dân tộc.
                </p>
                <p className="leading-loose text-lg text-justify !mb-0">
                  Trải qua nhiều thập kỷ, quá trình Công nghiệp hóa, Hiện đại hóa không ngừng được đẩy mạnh. Từ việc gia nhập ASEAN (1995), WTO (2007) cho đến việc tham gia các hiệp định thương mại tự do thế hệ mới, Việt Nam đang từng bước khẳng định vị thế và vươn tầm quốc tế.
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
                  <Link to="/game" className="inline-block px-6 py-3 border border-sepia text-sepia hover:bg-sepia hover:text-parchment-light transition-colors duration-300 font-playfair uppercase tracking-wider text-sm">
                    Khám phá Game
                  </Link>
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
          <aside className="lg:col-span-4 self-start sticky top-32" id="muc-luc" style={{
            animation: 'slideInRight 0.8s ease-out 0.2s both'
          }}>
            <div className="bg-gradient-to-br from-white via-white to-parchment-light/30 border border-gold-classic/30 rounded-2xl shadow-lg p-5 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:border-gold-classic/50">
              <h3 className="text-lg font-prata text-sepia mb-4 flex items-center gap-2 font-bold tracking-tight">
                <span className="w-8 h-1 bg-gradient-to-r from-gold-classic via-gold-classic/60 to-transparent rounded-full"></span>
                <span>Mục Lục</span>
              </h3>
              <ul className="space-y-2.5">
                {[
                  { title: "Khái Niệm Cơ Bản", id: "chapter-1", color: "from-amber-400", badge: "📚" },
                  { title: "Nội Dung Và Đặc Trưng CNH – HĐH Ở Việt Nam", id: "chapter-2", color: "from-blue-400", badge: "🏭" },
                  { title: "Vai Trò Và Ý Nghĩa", id: "chapter-3", color: "from-green-400", badge: "⭐" },
                  { title: "Thực Trạng Ở Việt Nam", id: "chapter-4", color: "from-purple-400", badge: "📊" },
                  { title: "Vấn Đề Và Thách Thức", id: "chapter-5", color: "from-red-400", badge: "⚠️" },
                  { title: "Định Hướng Và Giải Pháp", id: "chapter-6", color: "from-indigo-400", badge: "🎯" }
                ].map((item, index) => (
                  <li key={item.id} className="group relative">
                    <Link 
                      to={`/theory#${item.id}`} 
                      className="block p-3 rounded-lg bg-white hover:bg-gradient-to-br hover:from-gold-classic/10 hover:to-white border border-gold-classic/15 hover:border-gold-classic/40 transition-all duration-300 group-hover:shadow-md hover:translate-y-[-2px]"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{item.badge}</span>
                        <div className="flex-1 min-w-0">
                          <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${item.color} to-transparent text-transparent bg-clip-text block mb-1 font-inter`}>
                            Chương {index + 1}
                          </span>
                          <span className="text-sm font-merriweather text-ink-old/70 group-hover:text-sepia transition-all duration-300 line-clamp-2 leading-snug font-medium">
                            {item.title}
                          </span>
                        </div>
                      </div>
                      {/* Hover indicator */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-gold-classic to-transparent rounded-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Quote Block appended below TOC */}
              <div className="mt-8 p-5 border border-sepia/10 bg-parchment-old/50 rounded-xl shadow-inner text-center">
                <div className="text-3xl text-gold-classic/40 mb-1 font-playfair leading-none">"</div>
                <p className="font-garamond italic text-sepia text-base leading-relaxed px-2">
                  Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới, công nghiệp hóa, hiện đại hóa...
                </p>
                <div className="w-10 h-px bg-sepia/30 mx-auto mt-4 mb-2"></div>
                <div className="text-[10px] font-playfair text-ink-old uppercase tracking-widest">Đảng Cộng sản VN</div>
              </div>
            </div>
          </aside>
        </section>
      </main>


    </div>
  )
}

export default Home
