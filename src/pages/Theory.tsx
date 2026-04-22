import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Theory: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light text-ink-old font-garamond selection:bg-gold-classic/30">
      <Helmet>
        <title>Lý Thuyết | MLN122 - CNH, HĐH & Hội Nhập</title>
        <meta name="description" content="Lý thuyết về Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế trong môn Triết học Mác - Lênin." />
        <meta property="og:title" content="Lý Thuyết | MLN122" />
      </Helmet>

      {/* Header (Shared style) */}
      <header className="border-b border-gold-classic/30 bg-parchment-old/80 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-playfair font-bold text-sepia tracking-widest uppercase">
            MLN122
          </Link>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase items-center font-playfair">
            <Link to="/" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Trang chủ</Link>
            <Link to="/game" className="hover:text-gold-classic text-sepia/80 transition-colors duration-300">Game Ghép Thẻ</Link>
            <Link to="/theory" className="hover:text-gold-classic text-sepia transition-colors duration-300 border-b border-gold-classic">Lý Thuyết</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Main Area (Theory Sections) */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          <div className="mb-8">
            <div className="w-16 h-px bg-gold-classic mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-playfair font-black text-sepia tracking-tight mb-4 uppercase">
              Tài Liệu Lý Thuyết
            </h1>
            <p className="text-xl italic text-ink-old/80">
              Tìm hiểu về Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế tại Việt Nam.
            </p>
          </div>

          {/* Chapter 1 */}
          <section id="chapter-1" className="bg-parchment-old/50 p-8 md:p-12 border border-gold-classic/20 shadow-sm relative scroll-mt-24">
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-classic/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-classic/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-classic/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-classic/50"></div>
            
            <span className="text-gold-classic opacity-80 font-playfair text-sm mb-2 block uppercase tracking-widest">Chương 1</span>
            <h2 className="text-3xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b border-gold-classic/20 pb-4">
              Khung Khái Niệm CNH & HĐH
            </h2>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              <p className="first-letter:text-6xl first-letter:font-playfair first-letter:text-gold-classic first-letter:float-left first-letter:mr-3 first-letter:leading-none leading-loose text-justify mb-4">
                Công nghiệp hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế - xã hội... sang sử dụng lao động, cùng với công nghệ, phương tiện, phương pháp tiên tiến, hiện đại, dựa trên sự phát triển của công nghiệp và tiến bộ khoa học công nghệ, tạo ra năng suất lao động xã hội cao.
              </p>
              <p className="leading-loose text-justify text-ink-old/90">
                Hiện đại hóa là quá trình ứng dụng và trang bị những thành tựu khoa học, công nghệ tiên tiến, hiện đại nhất vào trong các lĩnh vực của đời sống xã hội nhằm không ngừng nâng cao năng suất lao động và cải thiện chất lượng cuộc sống của nhân dân.
              </p>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="chapter-2" className="bg-parchment-old/50 p-8 md:p-12 border border-gold-classic/20 shadow-sm relative scroll-mt-24">
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-classic/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-classic/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-classic/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-classic/50"></div>
            
            <span className="text-gold-classic opacity-80 font-playfair text-sm mb-2 block uppercase tracking-widest">Chương 2</span>
            <h2 className="text-3xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b border-gold-classic/20 pb-4">
              Tính Tất Yếu Của CNH, HĐH Tại VN
            </h2>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              <p className="leading-loose text-justify mb-4">
                Sự cần thiết của công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối cảnh cuộc Cách mạng công nghiệp 4.0 xuất phát từ yêu cầu phải xây dựng cơ sở vật chất - kỹ thuật cốt lõi cho Chủ nghĩa xã hội.
              </p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed text-ink-old/90">
                <li><span className="text-sepia font-semibold font-playfair">Thứ nhất:</span> Khắc phục nguy cơ tụt hậu xa hơn về kinh tế so với các nước trong khu vực và trên thế giới.</li>
                <li><span className="text-sepia font-semibold font-playfair">Thứ hai:</span> Tạo nền tảng để phát triển nguồn nhân lực chất lượng cao, chuyển đổi sang nền kinh tế tri thức số hóa.</li>
                <li><span className="text-sepia font-semibold font-playfair">Thứ ba:</span> Củng cố liên minh công - nông - trí, tăng cường tiềm lực quốc phòng, an ninh.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="chapter-3" className="bg-parchment-old/50 p-8 md:p-12 border border-gold-classic/20 shadow-sm relative scroll-mt-24">
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-classic/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-classic/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-classic/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-classic/50"></div>
            
            <span className="text-gold-classic opacity-80 font-playfair text-sm mb-2 block uppercase tracking-widest">Chương 3</span>
            <h2 className="text-3xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b border-gold-classic/20 pb-4">
              Hội Nhập Kinh Tế Quốc Tế
            </h2>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              <p className="leading-loose text-justify mb-4">
                Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế quốc gia vào nền kinh tế khu vực và thế giới, thông qua việc tham gia các hiệp định thương mại tự do như <strong>EVFTA, CPTPP</strong>, và tổ chức <strong>WTO, ASEAN</strong>.
              </p>
              <p className="leading-loose text-justify text-ink-old/90">
                Tác động của hội nhập:
              </p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed text-ink-old/90 mt-2">
                <li><strong className="font-playfair text-sepia font-normal italic">Tích cực:</strong> Mở rộng thị trường xuất khẩu, thu hút FDI, tiếp thu công nghệ quản lý tiên tiến.</li>
                <li><strong className="font-playfair text-sepia font-normal italic">Thách thức:</strong> Sức ép cạnh tranh gay gắt đối với doanh nghiệp nội địa, nguy cơ chênh lệch chất lượng nguồn nhân lực và phụ thuộc kinh tế.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar TOC */}
        <aside className="lg:col-span-4 self-start sticky top-32">
          <div className="border-l border-sepia/20 pl-8">
            <h3 className="text-lg font-playfair text-sepia uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-gold-classic"></span> Mục lục
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Khái Niệm CNH & HĐH", id: "chapter-1" },
                { title: "Tính Tất Yếu Tại Việt Nam", id: "chapter-2" },
                { title: "Hội Nhập Kinh Tế Quốc Tế", id: "chapter-3" }
              ].map((item, index) => (
                <li key={item.id} className="group relative">
                  <a href={`#${item.id}`} className="block text-lg font-garamond text-ink-old/80 group-hover:text-sepia transition-colors pr-4 leading-relaxed">
                    <span className="text-gold-classic opacity-70 font-playfair text-sm mr-2 block mb-1">Chương {index + 1}</span>
                    {item.title}
                  </a>
                  <div className="h-px w-0 bg-gold-classic group-hover:w-full transition-all duration-500 ease-out mt-2"></div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
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

export default Theory;
