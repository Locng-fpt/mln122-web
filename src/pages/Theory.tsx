import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/layout/Header'

const Theory: React.FC = () => {
  const { hash } = useLocation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [chapter4ImageIndex, setChapter4ImageIndex] = useState(0)
  const [chapter5PollutionImageIndex, setChapter5PollutionImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState({ src: '', alt: '', description: '' })

  const exampleImages = [
    {
      id: 0,
      title: '🏭 Samsung tại Việt Nam',
      src: '/images/Samsung_at_VN.png',
      alt: 'Samsung tại Việt Nam',
      description: [
        'Sử dụng dây chuyền sản xuất hiện đại',
        'Xuất khẩu điện thoại toàn cầu'
      ]
    },
    {
      id: 1,
      title: '🚗 VinFast',
      src: '/images/Vinfast_Car.png',
      alt: 'VinFast Car',
      description: [
        'Ứng dụng robot trong sản xuất ô tô điện',
        'Hướng tới công nghệ xanh'
      ]
    }
  ]

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? exampleImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === exampleImages.length - 1 ? 0 : prev + 1))
  }

  const chapter4Images = [
    {
      id: 0,
      src: '/images/car_kumi.png',
      alt: 'Dây chuyền công nghiệp hiện đại tại Việt Nam',
      caption: 'Hình 4.1: Công nghiệp chế tạo phát triển',
      description: 'Dây chuyền sản xuất công nghiệp hiện đại với lao động và máy móc phối hợp, minh họa cho quá trình công nghiệp hóa và ứng dụng công nghệ trong sản xuất.'
    },
    {
      id: 1,
      src: '/images/Infrastructure.png',
      alt: 'Hạ tầng giao thông và đô thị được cải thiện',
      caption: 'Hình 4.2: Hạ tầng kinh tế xã hội được nâng cấp',
      description: 'Hệ thống cầu và hạ tầng giao thông hiện đại, minh họa cho sự phát triển kết cấu hạ tầng trong quá trình công nghiệp hóa – hiện đại hóa ở Việt Nam.'
    },
    {
      id: 2,
      src: '/images/General.png',
      alt: 'Tổng quan thực trạng công nghiệp hóa tại Việt Nam',
      caption: 'Hình 4.3: Tổng quan thành tựu và hạn chế',
      description: 'Tổng hợp các lĩnh vực công nghiệp, nông nghiệp và công nghệ cao, minh họa quá trình công nghiệp hóa – hiện đại hóa toàn diện trong nền kinh tế Việt Nam.'
    },
    {
      id: 3,
      src: '/images/robot_vege.png',
      alt: 'Ứng dụng công nghệ trong nông nghiệp',
      caption: 'Hình 4.4: Công nghệ mới đang được ứng dụng',
      description: 'Ứng dụng robot và công nghệ cao trong nông nghiệp, minh họa quá trình hiện đại hóa sản xuất nông nghiệp theo hướng thông minh và tự động hóa.'
    }
  ]

  const goToPreviousChapter4Image = () => {
    setChapter4ImageIndex((prev) => (prev === 0 ? chapter4Images.length - 1 : prev - 1))
  }

  const goToNextChapter4Image = () => {
    setChapter4ImageIndex((prev) => (prev === chapter4Images.length - 1 ? 0 : prev + 1))
  }

  const chapter5PollutionImages = [
    {
      id: 0,
      src: '/images/CN_O_Nhiem.png',
      alt: 'Khu công nghiệp xả khói',
      description: 'Khu công nghiệp với nhiều ống khói lớn đang xả khói dày đặc lên bầu trời. Khói trắng xám bao phủ không khí, tạo cảm giác ô nhiễm nặng. Xung quanh có các công trình, máy móc và cần cẩu, thể hiện hoạt động sản xuất công nghiệp quy mô lớn.'
    },
    {
      id: 1,
      src: '/images/thuoctrusau.png',
      alt: 'Thuốc trừ sâu ô nhiễm môi trường',
      description: 'Thuốc trừ sâu trong sản xuất nông nghiệp bị phát tán ra môi trường (không khí, đất, nước), gây ô nhiễm và ảnh hưởng hệ sinh thái — một hạn chế của CNH–HĐH.'
    },
    {
      id: 2,
      src: '/images/urban.png',
      alt: 'Đô thị hóa nhanh',
      description: 'Đô thị hóa nhanh khiến nhà cửa san sát, giao thông quá tải — hạn chế của CNH–HĐH.'
    },
    {
      id: 3,
      src: '/images/plastic.png',
      alt: 'Ô nhiễm nhựa',
      description: 'Ô nhiễm nhựa do hoạt động sản xuất và tiêu dùng trong quá trình công nghiệp hóa – hiện đại hóa, gây áp lực lớn lên môi trường.'
    }
  ]

  const goToPreviousChapter5Image = () => {
    setChapter5PollutionImageIndex((prev) => (prev === 0 ? chapter5PollutionImages.length - 1 : prev - 1))
  }

  const goToNextChapter5Image = () => {
    setChapter5PollutionImageIndex((prev) => (prev === chapter5PollutionImages.length - 1 ? 0 : prev + 1))
  }

  const openModal = (image: { src: string; alt: string; description: string }) => {
    setModalImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment-light via-white to-parchment-light text-ink-old font-garamond selection:bg-gold-classic/30" style={{
      backgroundAttachment: 'fixed'
    }}>
      <Helmet>
        <title>Lý Thuyết | MLN122 - CNH, HĐH & Hội Nhập</title>
        <meta name="description" content="Lý thuyết về Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế trong môn Triết học Mác - Lênin." />
        <meta property="og:title" content="Lý Thuyết | MLN122" />
      </Helmet>

      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
        
        {/* Main Area (Theory Sections) */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Header Section with better styling */}
          <div className="relative mb-16 md:mb-20 animate-fade-in" style={{
            animation: 'fadeInDown 0.8s ease-out'
          }}>
            <div className="absolute -left-6 top-0 w-1.5 h-40 bg-gradient-to-b from-gold-classic via-gold-classic/50 to-transparent rounded-full"></div>
            <div className="mb-8">
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-gold-classic font-medium mb-4 opacity-90">Thư viện tài liệu học tập</span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-prata text-sepia leading-tight mb-6 font-bold" style={{
                letterSpacing: '-0.02em',
                fontWeight: '700'
              }}>
                Tài Liệu<br />Lý Thuyết
              </h1>
            </div>
            <p className="text-lg md:text-xl text-ink-old/70 leading-relaxed max-w-3xl font-merriweather font-light mb-8">
              Một hành trình toàn diện khám phá Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế tại Việt Nam, từ lý thuyết cơ bản đến thực tiễn phức tạp.
            </p>
            <div className="flex gap-4 items-center pt-2">
              <div className="w-24 h-1.5 bg-gradient-to-r from-gold-classic via-gold-classic/40 to-transparent rounded-full"></div>
              <span className="text-xs uppercase tracking-widest text-gold-classic/80 font-inter font-medium">Cập nhật: 2026</span>
            </div>
          </div>

          {/* Chapter 1 */}
          <section id="chapter-1" className="group bg-gradient-to-br from-amber-50/90 via-parchment-old/70 to-amber-50/50 p-8 md:p-12 border border-gold-classic/40 shadow-lg hover:shadow-2xl rounded-3xl relative scroll-mt-24 transition-all duration-500 transform hover:translate-y-[-6px] overflow-hidden" style={{
            animation: 'slideUpIn 0.8s ease-out 0.1s both',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold-classic/60 rounded-tl-lg group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold-classic/60 rounded-tr-lg group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold-classic/60 rounded-bl-lg group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold-classic/60 rounded-br-lg group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
            
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-classic via-gold-classic/50 to-transparent rounded-l-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-1.5 h-6 bg-gradient-to-b from-gold-classic to-gold-classic/40 rounded-full"></div>
                <span className="text-gold-classic/90 font-inter text-sm font-bold uppercase tracking-widest">Chương 1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-prata text-sepia mb-8 tracking-tight leading-tight border-b-2 border-gold-classic/30 pb-6 transition-all duration-300 group-hover:border-gold-classic/60 group-hover:text-amber-900">
                Khái Niệm Cơ Bản
              </h2>
            </div>
            <div className="prose prose-lg md:prose-lg prose-stone max-w-none text-ink-old">
              {/* Section 1.1 */}
              <h3 className="text-3xl font-prata text-sepia mt-10 mb-6 tracking-tight leading-tight">1. Công nghiệp hóa là gì?</h3>
              <p className="first-letter:text-7xl first-letter:font-prata first-letter:text-gold-classic first-letter:float-left first-letter:mr-4 first-letter:leading-none leading-relaxed text-justify mb-6 font-merriweather text-ink-old/80 text-lg">
                Công nghiệp hóa (CNH) là quá trình chuyển đổi nền kinh tế từ dựa chủ yếu vào nông nghiệp sang phát triển công nghiệp và dịch vụ, dựa trên việc:
              </p>
              <ul className="list-none pl-0 space-y-4 mb-6">
                <li>Tăng cường sử dụng máy móc, công nghệ</li>
                <li>Nâng cao năng suất lao động</li>
                <li>Chuyển dịch cơ cấu kinh tế theo hướng hiện đại</li>
              </ul>
              <div className="bg-gradient-to-br from-gold-classic/12 via-transparent to-transparent border-l-4 border-gold-classic/60 p-6 mb-8 rounded-lg hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <p className="font-inter font-semibold text-sepia mb-3 flex items-center gap-2"><span className="text-xl">💡</span> Nói đơn giản:</p>
                <p className="font-merriweather text-ink-old/75">Từ <span className="font-semibold">"làm thủ công, quy mô nhỏ"</span> → sang <span className="font-semibold">"sản xuất công nghiệp, quy mô lớn"</span></p>
              </div>

              {/* Section 1.2 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">2. Hiện đại hóa là gì?</h3>
              <p className="leading-relaxed text-justify mb-6 font-merriweather text-ink-old/80 text-lg">
                Hiện đại hóa (HĐH) là quá trình ứng dụng công nghệ tiên tiến, phương pháp quản lý hiện đại vào mọi lĩnh vực của nền kinh tế và xã hội, nhằm:
              </p>
              <ul className="list-none pl-0 space-y-4 mb-6">
                <li>Nâng cao chất lượng sản xuất</li>
                <li>Tăng hiệu quả kinh tế</li>
                <li>Tiếp cận trình độ phát triển của thế giới</li>
              </ul>
              <div className="bg-gradient-to-br from-gold-classic/12 via-transparent to-transparent border-l-4 border-gold-classic/60 p-6 mb-8 rounded-lg hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <p className="font-inter font-semibold text-sepia mb-3 flex items-center gap-2"><span className="text-xl">💡</span> Nói đơn giản:</p>
                <p className="font-merriweather text-ink-old/75">Làm mọi thứ <span className="font-semibold">"thông minh hơn, hiệu quả hơn"</span> nhờ công nghệ và tri thức</p>
              </div>

              {/* Section 1.3 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">3. Mối quan hệ giữa CNH và HĐH</h3>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed text-ink-old/90 mb-4">
                <li>Công nghiệp hóa là nền tảng (xây dựng cơ sở vật chất, phát triển sản xuất)</li>
                <li>Hiện đại hóa là bước nâng cao (đưa công nghệ và tri thức vào để tối ưu)</li>
              </ul>
              <div className="bg-gradient-to-br from-sepia/8 to-sepia/3 p-6 mb-6 border border-sepia/30 rounded-xl hover:shadow-lg transition-all duration-300">
                <p className="font-semibold text-sepia mb-3 flex items-center gap-2"><span>👉</span> Hai quá trình:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 mb-5">
                  <li>Diễn ra song song</li>
                  <li>Không thể tách rời</li>
                </ul>
                <p className="font-semibold text-sepia mb-3 flex items-center gap-2"><span>📌</span> Có thể hiểu:</p>
                <div className="bg-gradient-to-r from-parchment-light to-white p-4 rounded-lg border border-gold-classic/40 space-y-2">
                  <p className="text-ink-old/85 font-medium">CNH = "Xây nhà"</p>
                  <p className="text-ink-old/85 font-medium">HĐH = "Trang bị nhà thông minh"</p>
                </div>
              </div>

              {/* Section 1.4 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">⚡ Hiểu nhanh trong 30 giây</h3>
              <div className="bg-gradient-to-br from-gold-classic/12 to-transparent p-6 border border-gold-classic/30 mb-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-classic font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-ink-old/90"><strong className="text-sepia">CNH:</strong> Chuyển từ nông nghiệp → công nghiệp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-classic font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-ink-old/90"><strong className="text-sepia">HĐH:</strong> Áp dụng công nghệ hiện đại vào mọi lĩnh vực</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-classic font-bold text-lg flex-shrink-0">•</span>
                    <span className="text-ink-old/90"><strong className="text-sepia">CNH + HĐH:</strong> Vừa mở rộng sản xuất, vừa nâng cao chất lượng</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-sepia/12 to-transparent border-l-4 border-sepia/80 p-5 mb-8 rounded-r-lg hover:shadow-md transition-all duration-300">
                <p className="font-semibold text-sepia mb-2 flex items-center gap-2"><span>👉</span> Mục tiêu cuối cùng:</p>
                <p className="text-ink-old/85 font-medium">Tăng năng suất – nâng cao đời sống – phát triển đất nước</p>
              </div>

              {/* Schematic Diagram */}
              <div className="mt-10 mb-8 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/vietnam-cnh-hdh-schematic.png" 
                    alt="Vietnam CNH - HDH Transformation Schematic" 
                    className="w-full h-auto border border-sepia/20 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-center text-sepia/70 italic mt-4 font-medium">Hình 1.1: Sơ đồ chuyển đổi CNH - HĐH ở Việt Nam</p>
              </div>

              {/* Compare Diagram */}
              <div className="mt-10 mb-8 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/Compare.png" 
                    alt="Compare CNH and HDH" 
                    className="w-full h-auto border border-sepia/20 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-center text-sepia/70 italic mt-4 font-medium">Hình 1.2: So sánh CNH và HĐH</p>
              </div>

              {/* Basic Upgrade Diagram */}
              <div className="mt-10 mb-6 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/Basic_Upgrade.png" 
                    alt="Basic Upgrade CNH and HDH" 
                    className="w-full h-auto border border-sepia/20 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-center text-sepia/70 italic mt-4 font-medium">Hình 1.3: Nâng cấp cơ bản CNH - HĐH</p>
              </div>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="chapter-2" className="group bg-gradient-to-br from-blue-50/90 via-parchment-old/70 to-blue-50/50 p-8 md:p-12 border border-blue-400/40 shadow-lg hover:shadow-2xl rounded-3xl relative scroll-mt-24 transition-all duration-500 transform hover:translate-y-[-6px] overflow-hidden" style={{
            animation: 'slideUpIn 0.8s ease-out 0.2s both',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent rounded-l-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block text-blue-600 opacity-95 font-playfair text-xs mb-3 uppercase tracking-widest font-bold px-3 py-1 bg-blue-500/10 rounded-full border border-blue-400/30">Chương 2</span>
              <h2 className="text-3xl md:text-4xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b-3 border-blue-400/40 pb-4 transition-all duration-300 group-hover:border-blue-400/70 group-hover:text-blue-900">
                Nội Dung Và Đặc Trưng CNH – HĐH Ở Việt Nam
              </h2>
            </div>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              {/* Section 2.1 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">1. Chuyển dịch cơ cấu kinh tế</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Là quá trình chuyển nền kinh tế từ:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Nông nghiệp là chủ yếu</li>
                <li>→ sang công nghiệp và dịch vụ chiếm tỷ trọng lớn hơn</li>
              </ul>

              <h4 className="text-lg font-merriweather text-sepia/90 mt-7 mb-4 font-semibold">👉 Biểu hiện cụ thể:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tỷ trọng nông nghiệp giảm</li>
                <li>Tỷ trọng công nghiệp và dịch vụ tăng</li>
                <li>Lao động chuyển từ nông thôn → đô thị, khu công nghiệp</li>
              </ul>

              <div className="w-full h-64 bg-sepia/5 border-2 border-dashed border-sepia/15 flex items-center justify-center italic text-sepia/55 my-8 shadow-inner">
                <img 
                  src="/images/Pie_Chart.png" 
                  alt="Biểu đồ cơ cấu kinh tế Việt Nam" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-center text-sepia/70 italic">Hình 2.1: Biểu đồ chuyển dịch cơ cấu kinh tế Việt Nam qua các năm</p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Ý nghĩa:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tăng năng suất lao động</li>
                <li>Tạo nhiều việc làm mới</li>
                <li>Đẩy nhanh quá trình đô thị hóa</li>
              </ul>

              {/* Section 2.2 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">2. Ứng dụng khoa học – công nghệ</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Là việc đưa công nghệ hiện đại vào sản xuất và quản lý để:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Tăng năng suất</li>
                <li>Nâng cao chất lượng sản phẩm</li>
                <li>Giảm chi phí</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tự động hóa dây chuyền sản xuất</li>
                <li>Ứng dụng AI, robot, dữ liệu</li>
                <li>Chuyển đổi số trong doanh nghiệp</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📍 Ví dụ thực tế:</h4>
              <div className="bg-gold-classic/10 border-l-4 border-gold-classic p-6 mb-6">
                {/* Carousel */}
                <div className="relative">
                  <p className="font-semibold text-sepia mb-4">{exampleImages[currentImageIndex].title}</p>
                  
                  {/* Image Container */}
                  <div className="relative w-full h-96 bg-white rounded-lg shadow-lg border border-sepia/20 overflow-hidden mb-4">
                    <img 
                      src={exampleImages[currentImageIndex].src} 
                      alt={exampleImages[currentImageIndex].alt} 
                      className="w-full h-full object-contain p-4 cursor-pointer"
                      onClick={() => openModal({
                        src: exampleImages[currentImageIndex].src,
                        alt: exampleImages[currentImageIndex].alt,
                        description: exampleImages[currentImageIndex].description.join(', ')
                      })}
                      title={exampleImages[currentImageIndex].description.join(', ')}
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={goToPrevious}
                      className="flex items-center justify-center w-10 h-10 bg-sepia/20 hover:bg-sepia/40 text-sepia rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    
                    <div className="text-sm text-sepia/70">
                      {currentImageIndex + 1} / {exampleImages.length}
                    </div>
                    
                    <button
                      onClick={goToNext}
                      className="flex items-center justify-center w-10 h-10 bg-sepia/20 hover:bg-sepia/40 text-sepia rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mb-4">
                    {exampleImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-sepia' : 'bg-sepia/30'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="list-disc pl-6 space-y-1 text-ink-old/90 text-sm">
                    {exampleImages[currentImageIndex].description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Nhận xét:</h4>
              <div className="bg-sepia/5 p-4 border border-sepia/20 mb-6">
                <p className="text-sm font-semibold text-sepia mb-3">👉 Việt Nam đã tiếp cận công nghệ hiện đại, nhưng:</p>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 text-sm">
                  <li>Chủ yếu vẫn phụ thuộc vào doanh nghiệp FDI</li>
                  <li>Khả năng tự chủ công nghệ còn hạn chế</li>
                </ul>
              </div>

              {/* Section 2.3 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">3. Phát triển nguồn nhân lực</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Là quá trình nâng cao:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Trình độ học vấn</li>
                <li>Kỹ năng nghề</li>
                <li>Khả năng thích ứng công nghệ</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tăng số lượng lao động qua đào tạo</li>
                <li>Phát triển kỹ sư, chuyên gia công nghệ</li>
                <li>Đào tạo nghề gắn với doanh nghiệp</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📍 Ví dụ thực tế:</h4>
              <div className="bg-gold-classic/10 border-l-4 border-gold-classic p-4 mb-6">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Lao động Việt Nam tham gia sản xuất điện tử, dệt may</li>
                  <li>Nhiều kỹ sư làm việc trong các tập đoàn lớn</li>
                </ul>
              </div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Vấn đề:</h4>
              <div className="bg-sepia/5 p-4 border border-sepia/20 mb-8">
                <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 text-sm">
                  <li>Thiếu lao động chất lượng cao</li>
                  <li>Kỹ năng chưa theo kịp công nghệ</li>
                </ul>
              </div>

              {/* Quick Understanding */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">⚡ Hiểu nhanh toàn phần</h3>
              <div className="bg-gold-classic/5 p-6 border border-gold-classic/20 mb-6">
                <ul className="list-disc pl-6 space-y-3 text-ink-old/90 mb-4">
                  <li><strong>Chuyển dịch cơ cấu</strong> → thay đổi nền kinh tế</li>
                  <li><strong>Công nghệ</strong> → nâng cao chất lượng</li>
                  <li><strong>Con người</strong> → yếu tố quyết định</li>
                </ul>
                <div className="bg-parchment-light p-3 rounded border border-gold-classic/30 mt-4">
                  <p className="text-sm font-semibold text-sepia mb-2">👉 Ba yếu tố này kết hợp tạo nên:</p>
                  <p className="text-sm text-ink-old/90"><strong>CNH – HĐH hiện đại</strong></p>
                </div>
              </div>

              {/* Important Notes */}
              <h4 className="text-lg font-playfair text-sepia/90 mt-8 mb-3">📌 Ghi nhớ quan trọng</h4>
              <div className="bg-sepia/10 border-l-4 border-sepia p-4 mb-6">
                <p className="text-sm font-semibold text-sepia mb-3">👉 CNH – HĐH ở Việt Nam có đặc trưng:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Đi sau nhưng có thể rút ngắn nhờ công nghệ</li>
                  <li>Gắn chặt với hội nhập quốc tế</li>
                  <li>Vẫn còn phụ thuộc FDI và công nghệ nước ngoài</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-gold-classic/10 p-6 border border-gold-classic/20">
                <h4 className="text-lg font-playfair text-sepia mb-3">🎯 Kết luận</h4>
                <p className="text-ink-old/90 mb-3">
                  CNH – HĐH ở Việt Nam không chỉ là phát triển công nghiệp, mà là:
                </p>
                <p className="text-sm font-semibold text-sepia">
                  👉 chuyển đổi toàn diện từ cơ cấu kinh tế → công nghệ → con người
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="chapter-3" className="group bg-gradient-to-br from-green-50/90 via-parchment-old/70 to-green-50/50 p-8 md:p-12 border border-green-400/40 shadow-lg hover:shadow-2xl rounded-3xl relative scroll-mt-24 transition-all duration-500 transform hover:translate-y-[-6px] overflow-hidden" style={{
            animation: 'slideUpIn 0.8s ease-out 0.3s both',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 via-green-500/50 to-transparent rounded-l-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block text-green-600 opacity-95 font-playfair text-xs mb-3 uppercase tracking-widest font-bold px-3 py-1 bg-green-500/10 rounded-full border border-green-400/30">Chương 3</span>
              <h2 className="text-3xl md:text-4xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b-3 border-green-400/40 pb-4 transition-all duration-300 group-hover:border-green-400/70 group-hover:text-green-900">
                Vai Trò Và Ý Nghĩa
              </h2>
            </div>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              {/* Section 3.1 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">1. Thúc đẩy tăng trưởng kinh tế</h3>
              
              <p className="leading-loose text-justify mb-4">
                CNH – HĐH là động lực quan trọng giúp nền kinh tế tăng trưởng nhanh và bền vững.
              </p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tăng sản lượng hàng hóa và dịch vụ</li>
                <li>Nâng cao năng suất lao động</li>
                <li>Mở rộng quy mô sản xuất</li>
              </ul>

              <div className="my-8 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/GPD.png" 
                    alt="Biểu đồ tăng trưởng GDP Việt Nam" 
                    className="w-full h-auto border border-sepia/20 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-center text-sepia/70 italic mt-4 font-medium">Hình 3.1: Biểu đồ tăng trưởng GDP Việt Nam</p>
              </div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Ý nghĩa:</h4>
              <div className="bg-sepia/5 p-4 border border-sepia/20 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Tạo nền tảng vật chất cho phát triển</li>
                  <li>Tăng sức cạnh tranh của nền kinh tế</li>
                </ul>
              </div>

              {/* Section 3.2 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">2. Nâng cao đời sống nhân dân</h3>
              
              <p className="leading-loose text-justify mb-4">
                CNH – HĐH giúp cải thiện toàn diện điều kiện sống của người dân.
              </p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tạo nhiều việc làm hơn</li>
                <li>Thu nhập bình quân tăng</li>
                <li>Điều kiện sống (y tế, giáo dục, hạ tầng) được cải thiện</li>
              </ul>
              
              <div className="my-8 group">
                <div className="relative overflow-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center bg-white p-2">
                  <img 
                    src="/images/ThuNhap.png" 
                    alt="Thu nhập và đời sống nhân dân" 
                    className="h-auto max-w-full border border-sepia/20 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-center text-sepia/70 italic mt-4 font-medium">Hình 3.2: Sự cải thiện thu nhập và điều kiện sống của nhân dân</p>
              </div>
              
              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📍 Ví dụ:</h4>
              <div className="bg-gold-classic/10 border-l-4 border-gold-classic p-4 mb-6">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Công nhân làm việc trong khu công nghiệp có thu nhập ổn định hơn so với lao động nông nghiệp truyền thống</li>
                  <li>Hệ thống giao thông, điện, internet phát triển rộng khắp</li>
                </ul>
              </div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Tuy nhiên:</h4>
              <div className="bg-sepia/5 p-4 border border-sepia/20 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Vẫn còn khoảng cách giàu – nghèo</li>
                  <li>Chênh lệch giữa thành thị và nông thôn</li>
                </ul>
              </div>

              {/* Image: Income illustration */}
              

              {/* Section 3.3 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">3. Thúc đẩy hội nhập quốc tế</h3>
              
              <p className="leading-loose text-justify mb-4">
                CNH – HĐH tạo điều kiện để Việt Nam tham gia sâu vào nền kinh tế toàn cầu.
              </p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Tăng xuất khẩu hàng hóa</li>
                <li>Thu hút đầu tư nước ngoài (FDI)</li>
                <li>Tham gia các hiệp định thương mại quốc tế</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📍 Ví dụ:</h4>
              <div className="bg-gold-classic/10 border-l-4 border-gold-classic p-4 mb-6">
                <p className="text-sm font-semibold text-sepia mb-2">Việt Nam là một trong những nước xuất khẩu lớn về:</p>
                <ul className="list-disc pl-6 space-y-1 text-ink-old/90 text-sm mb-3">
                  <li>Điện thoại</li>
                  <li>Dệt may</li>
                </ul>
                <p className="text-sm text-ink-old/90">Nhiều tập đoàn quốc tế đầu tư vào Việt Nam</p>
              </div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Ý nghĩa:</h4>
              <div className="bg-sepia/5 p-4 border border-sepia/20 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Mở rộng thị trường</li>
                  <li>Tiếp cận công nghệ hiện đại</li>
                  <li>Nâng cao vị thế quốc gia</li>
                </ul>
              </div>

              {/* Quick Understanding */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">⚡ Hiểu nhanh toàn phần</h3>
              <div className="my-8 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/Finance_result.png" 
                    alt="Tóm tắt kết quả tài chính và phát triển kinh tế" 
                    className="w-full h-auto border border-sepia/20 rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-center text-sepia/70 italic mt-4 font-medium">Hình 3.4: Tóm tắt kết quả tài chính và phát triển kinh tế</p>
              </div>

              {/* Quick Notes */}
              <h4 className="text-lg font-playfair text-sepia/90 mt-8 mb-3">📌 Ghi nhớ nhanh</h4>
              <div className="bg-sepia/10 border-l-4 border-sepia p-4 mb-6">
                <p className="text-sm font-semibold text-sepia mb-3">👉 CNH – HĐH không chỉ làm kinh tế phát triển, mà còn:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Thay đổi toàn bộ xã hội</li>
                  <li>Nâng cao vị thế quốc gia trên thế giới</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-gold-classic/10 p-6 border border-gold-classic/20">
                <h4 className="text-lg font-playfair text-sepia mb-3">🎯 Kết luận</h4>
                <p className="text-ink-old/90 text-sm mb-3">
                  CNH – HĐH là quá trình mang tính chiến lược lâu dài, có vai trò:
                </p>
                <p className="text-sm font-semibold text-sepia">
                  👉 tạo nền tảng phát triển – nâng cao chất lượng sống – mở rộng hội nhập quốc tế
                </p>
              </div>
            </div>
          </section>



          {/* Chapter 4 */}
          <section id="chapter-4" className="group bg-gradient-to-br from-purple-50/90 via-parchment-old/70 to-purple-50/50 p-8 md:p-12 border border-purple-400/40 shadow-lg hover:shadow-2xl rounded-3xl relative scroll-mt-24 transition-all duration-500 transform hover:translate-y-[-6px] overflow-hidden" style={{
            animation: 'slideUpIn 0.8s ease-out 0.4s both',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent rounded-l-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block text-purple-600 opacity-95 font-playfair text-xs mb-3 uppercase tracking-widest font-bold px-3 py-1 bg-purple-500/10 rounded-full border border-purple-400/30">Chương 4</span>
              <h2 className="text-3xl md:text-4xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b-3 border-purple-400/40 pb-4 transition-all duration-300 group-hover:border-purple-400/70 group-hover:text-purple-900">
                Thực Trạng Ở Việt Nam
              </h2>
            </div>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              {/* Section 4.1 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">1. Thành tựu</h3>
              
              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Những kết quả nổi bật trong quá trình CNH – HĐH:</h4>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-gold-classic pl-4">
                  <p className="font-semibold text-sepia">Tăng trưởng kinh tế ổn định</p>
                  <p className="text-ink-old/90 text-sm">→ Việt Nam duy trì tốc độ tăng trưởng khá cao trong nhiều năm</p>
                </div>
                <div className="border-l-4 border-gold-classic pl-4">
                  <p className="font-semibold text-sepia">Chuyển dịch cơ cấu kinh tế tích cực</p>
                  <p className="text-ink-old/90 text-sm">→ Công nghiệp và dịch vụ chiếm tỷ trọng lớn hơn</p>
                </div>
                <div className="border-l-4 border-gold-classic pl-4">
                  <p className="font-semibold text-sepia">Phát triển mạnh xuất khẩu</p>
                  <p className="text-ink-old/90 text-sm mb-2">→ Trở thành trung tâm sản xuất các mặt hàng như:</p>
                  <ul className="list-disc pl-6 text-ink-old/90 text-sm space-y-1">
                    <li>Điện tử</li>
                    <li>Dệt may</li>
                  </ul>
                </div>
                <div className="border-l-4 border-gold-classic pl-4">
                  <p className="font-semibold text-sepia">Thu hút đầu tư nước ngoài (FDI)</p>
                  <p className="text-ink-old/90 text-sm">→ Nhiều tập đoàn lớn đầu tư, tạo việc làm</p>
                </div>
                <div className="border-l-4 border-gold-classic pl-4">
                  <p className="font-semibold text-sepia">Hạ tầng kinh tế – xã hội cải thiện</p>
                  <p className="text-ink-old/90 text-sm">→ Giao thông, điện, internet phát triển nhanh</p>
                </div>
              </div>

              <div className="bg-gold-classic/5 border border-gold-classic/20 rounded-lg p-4 md:p-6 my-8">
                <div className="relative w-full h-80 md:h-96 bg-white rounded-lg shadow-lg border border-sepia/20 overflow-hidden mb-4">
                  <img
                    src={chapter4Images[chapter4ImageIndex].src}
                    alt={chapter4Images[chapter4ImageIndex].alt}
                    className="w-full h-full object-contain p-4 cursor-pointer"
                    onClick={() => openModal(chapter4Images[chapter4ImageIndex])}
                    title={chapter4Images[chapter4ImageIndex].description}
                  />

                  <button
                    onClick={goToPreviousChapter4Image}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-sepia/80 text-white w-10 h-10 rounded-full hover:bg-sepia transition-colors duration-300 flex items-center justify-center text-xl"
                    aria-label="Hình trước"
                  >
                    ‹
                  </button>

                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-sepia/80 text-white px-3 py-1 rounded-full text-sm">
                    {chapter4ImageIndex + 1} / {chapter4Images.length}
                  </div>

                  <button
                    onClick={goToNextChapter4Image}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-sepia/80 text-white w-10 h-10 rounded-full hover:bg-sepia transition-colors duration-300 flex items-center justify-center text-xl"
                    aria-label="Hình tiếp theo"
                  >
                    ›
                  </button>
                </div>

                <p className="text-sm text-center text-sepia/70 italic mb-4">
                  {chapter4Images[chapter4ImageIndex].caption}
                </p>

                <div className="flex justify-center gap-2">
                  {chapter4Images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setChapter4ImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === chapter4ImageIndex
                          ? 'bg-sepia scale-110'
                          : 'bg-sepia/30 hover:bg-sepia/50'
                      }`}
                      aria-label={`Chuyển đến hình ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Section 4.2 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">2. Hạn chế</h3>
              
              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Những vấn đề còn tồn tại:</h4>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-red-500/60 pl-4">
                  <p className="font-semibold text-sepia">Giá trị gia tăng thấp</p>
                  <p className="text-ink-old/90 text-sm">→ Chủ yếu gia công, lắp ráp</p>
                </div>
                <div className="border-l-4 border-red-500/60 pl-4">
                  <p className="font-semibold text-sepia">Phụ thuộc vào doanh nghiệp FDI</p>
                  <p className="text-ink-old/90 text-sm">→ Công nghệ và thị trường do nước ngoài chi phối</p>
                </div>
                <div className="border-l-4 border-red-500/60 pl-4">
                  <p className="font-semibold text-sepia">Công nghệ còn hạn chế</p>
                  <p className="text-ink-old/90 text-sm">→ Chưa làm chủ được công nghệ lõi</p>
                </div>
                <div className="border-l-4 border-red-500/60 pl-4">
                  <p className="font-semibold text-sepia">Chất lượng nguồn nhân lực chưa cao</p>
                  <p className="text-ink-old/90 text-sm">→ Thiếu lao động kỹ thuật cao</p>
                </div>
                <div className="border-l-4 border-red-500/60 pl-4">
                  <p className="font-semibold text-sepia">Khoảng cách phát triển</p>
                  <p className="text-ink-old/90 text-sm mb-2">→ Chênh lệch giữa:</p>
                  <ul className="list-disc pl-6 text-ink-old/90 text-sm space-y-1">
                    <li>Thành thị – nông thôn</li>
                    <li>Vùng phát triển – vùng khó khăn</li>
                  </ul>
                </div>
              </div>


              {/* Comparison Table */}
              <h4 className="text-lg font-playfair text-sepia/90 mt-8 mb-4">📊 Bảng so sánh tổng hợp</h4>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-sepia/30 text-sm">
                  <thead>
                    <tr className="bg-gold-classic/20">
                      <th className="border border-sepia/30 px-4 py-2 text-left font-semibold text-sepia">Nội dung</th>
                      <th className="border border-sepia/30 px-4 py-2 text-left font-semibold text-green-700">Thành tựu</th>
                      <th className="border border-sepia/30 px-4 py-2 text-left font-semibold text-red-700">Hạn chế</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-sepia/30 px-4 py-2 font-semibold text-sepia">Tăng trưởng</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Tốc độ cao, ổn định</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Chưa bền vững</td>
                    </tr>
                    <tr className="bg-parchment-old/20">
                      <td className="border border-sepia/30 px-4 py-2 font-semibold text-sepia">Cơ cấu kinh tế</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Công nghiệp – dịch vụ tăng</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Nông nghiệp còn lớn</td>
                    </tr>
                    <tr>
                      <td className="border border-sepia/30 px-4 py-2 font-semibold text-sepia">Công nghệ</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Tiếp cận công nghệ mới</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Chưa làm chủ</td>
                    </tr>
                    <tr className="bg-parchment-old/20">
                      <td className="border border-sepia/30 px-4 py-2 font-semibold text-sepia">Doanh nghiệp</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Thu hút FDI mạnh</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Doanh nghiệp nội yếu</td>
                    </tr>
                    <tr>
                      <td className="border border-sepia/30 px-4 py-2 font-semibold text-sepia">Lao động</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Dồi dào</td>
                      <td className="border border-sepia/30 px-4 py-2 text-ink-old/90">Chất lượng chưa cao</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Quick Understanding */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">⚡ Hiểu nhanh trong 30 giây</h3>
              <div className="bg-gold-classic/5 p-6 border border-gold-classic/20 mb-6">
                <p className="text-ink-old/90 mb-3">Việt Nam đã công nghiệp hóa nhanh</p>
                <p className="text-ink-old/90 mb-4">Nhưng vẫn:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 mb-4">
                  <li>Phụ thuộc FDI</li>
                  <li>Giá trị gia tăng thấp</li>
                </ul>
                <div className="bg-parchment-light p-3 rounded border border-gold-classic/30">
                  <p className="text-sm font-semibold text-sepia">👉 Nghĩa là:</p>
                  <p className="text-sm text-ink-old/90">"làm được nhiều, nhưng chưa giữ được giá trị cao"</p>
                </div>
              </div>

              {/* Important Notes */}
              <h4 className="text-lg font-playfair text-sepia/90 mt-8 mb-3">📌 Ghi nhớ quan trọng</h4>
              <div className="bg-sepia/10 border-l-4 border-sepia p-4 mb-6">
                <p className="text-sm font-semibold text-sepia mb-3">👉 Thực trạng CNH – HĐH ở Việt Nam mang tính:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Phát triển nhanh nhưng chưa sâu</li>
                  <li>Hội nhập mạnh nhưng chưa tự chủ</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-gold-classic/10 p-6 border border-gold-classic/20">
                <h4 className="text-lg font-playfair text-sepia mb-3">🎯 Kết luận</h4>
                <p className="text-ink-old/90 text-sm mb-3">
                  Việt Nam đã đạt nhiều thành tựu trong CNH – HĐH, nhưng vẫn đối mặt với những hạn chế lớn, đặc biệt là:
                </p>
                <p className="text-sm font-semibold text-sepia">
                  👉 chưa làm chủ công nghệ và chuỗi giá trị
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="chapter-5" className="group bg-gradient-to-br from-red-50/90 via-parchment-old/70 to-red-50/50 p-8 md:p-12 border border-red-400/40 shadow-lg hover:shadow-2xl rounded-3xl relative scroll-mt-24 transition-all duration-500 transform hover:translate-y-[-6px] overflow-hidden" style={{
            animation: 'slideUpIn 0.8s ease-out 0.5s both',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-red-500/50 to-transparent rounded-l-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block text-red-600 opacity-95 font-playfair text-xs mb-3 uppercase tracking-widest font-bold px-3 py-1 bg-red-500/10 rounded-full border border-red-400/30">Chương 5</span>
              <h2 className="text-3xl md:text-4xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b-3 border-red-400/40 pb-4 transition-all duration-300 group-hover:border-red-400/70 group-hover:text-red-900">
                Vấn Đề Và Thách Thức
              </h2>
            </div>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              {/* Section 5.1 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">1. Bẫy thu nhập trung bình</h3>
              <div className="w-full my-8 bg-white border-2 border-red-400/30 rounded-lg p-6 shadow-lg">
  <h4 className="text-lg font-playfair text-sepia mb-4">📹 Khái niệm về bẫy thu nhập trung bình</h4>
  <div className="w-full aspect-video">
    <iframe 
      className="w-full h-full rounded-lg"
      src="https://www.youtube.com/embed/3kPyRoivoko" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen={true}
    ></iframe>
  </div>
</div>
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                1. Bẫy thu nhập trung bình là gì?
Hiểu đơn giản, đây là tình trạng một quốc gia sau khi thoát nghèo và vươn lên mức thu nhập trung bình thì bị "kẹt" lại ở mức đó, không thể trở thành nước giàu
. Nguyên nhân là do những lợi thế cũ như nhân công giá rẻ hay giá vốn thấp không còn tác dụng, trong khi cơ cấu kinh tế còn đơn giản, chưa cạnh tranh lại các nước phát triển
              </p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Tăng trưởng kinh tế chậm lại</li>
                <li>Năng suất lao động không tăng mạnh</li>
                <li>Không cạnh tranh được với:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nước có chi phí thấp</li>
                    <li>Nước có công nghệ cao</li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Nguyên nhân:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Phụ thuộc lao động giá rẻ</li>
                <li>Thiếu đổi mới công nghệ</li>
                <li>Chưa phát triển doanh nghiệp mạnh</li>
              </ul>

              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-8">
                <p className="font-semibold text-sepia mb-2">📌 Hệ quả:</p>
                <p className="text-sm text-ink-old/90">👉 Nếu không vượt qua → nền kinh tế sẽ phát triển chậm và mất cơ hội bứt phá</p>
              </div>

              {/* Section 5.2 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">2. Phụ thuộc vào FDI</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Nền kinh tế phụ thuộc nhiều vào doanh nghiệp có vốn đầu tư nước ngoài về: công nghệ, vốn, thị trường.
              </p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>FDI chiếm tỷ trọng lớn trong xuất khẩu</li>
                <li>Doanh nghiệp nội khó tham gia chuỗi giá trị</li>
                <li>Công nghệ chủ yếu do nước ngoài nắm giữ</li>
              </ul>

              <div className="w-full my-8 bg-white border-2 border-sepia/30 rounded-lg p-6 shadow-lg flex flex-col items-center">
  <img 
    src="/images/FDI.png" 
    alt="Sơ đồ FDI → Sản xuất → Xuất khẩu (Việt Nam hưởng giá trị thấp)" 
    className="w-full max-w-xl h-auto border border-sepia/20 rounded shadow-md mb-3"
  />
  <p className="text-sm text-center text-sepia/70 italic mt-1">
    Hình: Cán cân thương mại xuất khẩu
  </p>
</div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Vấn đề:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Ít chuyển giao công nghệ</li>
                <li>Lợi nhuận lớn chảy ra nước ngoài</li>
              </ul>

              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-8">
                <p className="font-semibold text-sepia mb-2">📌 Hệ quả:</p>
                <p className="text-sm text-ink-old/90">👉 Nền kinh tế thiếu tự chủ và dễ bị tác động từ bên ngoài</p>
              </div>

              {/* Section 5.3 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">3. Công nghệ còn thấp</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Thực trạng:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Chủ yếu sử dụng công nghệ trung bình hoặc thấp</li>
                <li>Chưa làm chủ công nghệ lõi</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Sản xuất chủ yếu gia công, lắp ráp</li>
                <li>Phụ thuộc vào máy móc, thiết bị nhập khẩu</li>
                <li>Ít sáng chế, đổi mới sáng tạo</li>
              </ul>

              <div className="w-full my-8 bg-white border-2 border-sepia/30 rounded-lg p-6 shadow-lg flex flex-col items-center">
  <div className="relative w-full flex flex-col items-center group">
    <img 
      src="/images/Unicorn.png" 
      alt="Kỳ lân công nghệ (Tech Unicorn)" 
      className="w-full max-w-xl h-auto border border-sepia/20 rounded shadow-md mb-3 cursor-pointer"
    />
    {/* Hover Tooltip */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 mt-2 z-20 w-[350px] max-w-xs bg-white border border-gold-classic/60 rounded-lg shadow-lg px-4 py-3 text-xs text-ink-old/90 font-sans transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
      Kỳ lân công nghệ (Tech Unicorn) là các công ty khởi nghiệp tư nhân trong lĩnh vực công nghệ có giá trị vốn hóa thị trường từ 1 tỷ USD trở lên, chưa niêm yết công khai. Thuật ngữ này ám chỉ sự hiếm có và tiềm năng tăng trưởng đột phá
    </div>
    <p className="text-sm text-center text-sepia/70 italic mt-1">
      Hình: Tỉ lệ kì lân công nghê còn thấp
    </p>
  </div>
</div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Nguyên nhân:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Đầu tư cho R&D còn hạn chế</li>
                <li>Nguồn nhân lực công nghệ cao còn thiếu</li>
              </ul>

              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-8">
                <p className="font-semibold text-sepia mb-2">📌 Hệ quả:</p>
                <p className="text-sm text-ink-old/90">👉 Khó nâng cao giá trị gia tăng và năng lực cạnh tranh</p>
              </div>

              {/* Section 5.4 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">4. Ô nhiễm môi trường</h3>

              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Là tình trạng môi trường (không khí, nước, đất) bị suy giảm chất lượng do tác động từ hoạt động sản xuất và sinh hoạt trong quá trình CNH – HĐH.
              </p>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Ô nhiễm không khí tại các đô thị và khu công nghiệp</li>
                <li>Nguồn nước bị ô nhiễm do chất thải công nghiệp</li>
                <li>Đất bị thoái hóa, nhiễm hóa chất</li>
                <li>Gia tăng rác thải, đặc biệt là rác thải nhựa</li>
              </ul>

              {/* Carousel for pollution images */}
              <div className="w-full my-8 bg-white border-2 border-sepia/30 rounded-lg p-6 shadow-lg">
                <div className="relative w-full">
                  {/* Image Display */}
                  <div 
                    className="relative w-full h-96 bg-sepia/10 rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
                    onClick={() => openModal({
                      src: chapter5PollutionImages[chapter5PollutionImageIndex].src,
                      alt: chapter5PollutionImages[chapter5PollutionImageIndex].alt,
                      description: chapter5PollutionImages[chapter5PollutionImageIndex].description
                    })}
                  >
                    <img 
                      src={chapter5PollutionImages[chapter5PollutionImageIndex].src} 
                      alt={chapter5PollutionImages[chapter5PollutionImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover Description Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <p className="text-white text-sm md:text-base leading-relaxed text-center">
                        {chapter5PollutionImages[chapter5PollutionImageIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button 
                    onClick={goToPreviousChapter5Image}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-sepia/80 hover:bg-sepia text-white rounded-full p-2 transition-colors z-10"
                  >
                    ←
                  </button>
                  <button 
                    onClick={goToNextChapter5Image}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-sepia/80 hover:bg-sepia text-white rounded-full p-2 transition-colors z-10"
                  >
                    →
                  </button>

                  {/* Image Counter */}
                  <div className="text-center mt-4 text-sepia/80 text-sm">
                    {chapter5PollutionImageIndex + 1} / {chapter5PollutionImages.length}
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Nguyên nhân:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Phát triển công nghiệp nhanh nhưng thiếu kiểm soát</li>
                <li>Công nghệ sản xuất còn lạc hậu, tiêu tốn tài nguyên</li>
                <li>Ý thức bảo vệ môi trường chưa cao</li>
                <li>Quản lý môi trường còn hạn chế</li>
              </ul>

              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-8">
                <p className="font-semibold text-sepia mb-2">📌 Hệ quả:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Ảnh hưởng đến sức khỏe con người</li>
                  <li>Suy giảm tài nguyên thiên nhiên</li>
                  <li>Tác động tiêu cực đến phát triển bền vững</li>
                </ul>
              </div>
             

              {/* Quick Understanding */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">⚡ Hiểu nhanh trong 30 giây</h3>
              <div className="bg-gold-classic/5 p-6 border border-gold-classic/20 mb-6">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 mb-4">
                  <li>Nguy cơ bẫy thu nhập trung bình</li>
                  <li>Phụ thuộc FDI</li>
                  <li>Công nghệ thấp</li>
                </ul>
                <div className="bg-parchment-light p-3 rounded border border-gold-classic/30 mt-4">
                  <p className="text-sm font-semibold text-sepia mb-2">👉 Điểm chung:</p>
                  <p className="text-sm text-ink-old/90">Việt Nam chưa nắm phần giá trị cao trong nền kinh tế</p>
                </div>
              </div>

              {/* Important Notes */}
              <h4 className="text-lg font-playfair text-sepia/90 mt-8 mb-3">📌 Ghi nhớ quan trọng</h4>
              <div className="bg-sepia/10 border-l-4 border-sepia p-4 mb-6">
                <p className="text-sm font-semibold text-sepia mb-3">👉 Thách thức lớn nhất không phải là thiếu sản xuất, mà là:</p>
                <p className="text-sm font-semibold text-red-600">👉 thiếu quyền kiểm soát giá trị và công nghệ</p>
              </div>

              {/* Conclusion */}
              <div className="bg-gold-classic/10 p-6 border border-gold-classic/20">
                <h4 className="text-lg font-playfair text-sepia mb-3">🎯 Kết luận</h4>
                <p className="text-ink-old/90 text-sm mb-3">
                  Để CNH – HĐH thành công, Việt Nam cần vượt qua các thách thức:
                </p>
                <p className="text-sm font-semibold text-sepia">
                  👉 nâng cấp công nghệ – giảm phụ thuộc – vươn lên chuỗi giá trị cao
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="chapter-6" className="group bg-gradient-to-br from-indigo-50/90 via-parchment-old/70 to-indigo-50/50 p-8 md:p-12 border border-indigo-400/40 shadow-lg hover:shadow-2xl rounded-3xl relative scroll-mt-24 transition-all duration-500 transform hover:translate-y-[-6px] overflow-hidden" style={{
            animation: 'slideUpIn 0.8s ease-out 0.6s both',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent rounded-l-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block text-indigo-600 opacity-95 font-playfair text-xs mb-3 uppercase tracking-widest font-bold px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-400/30">Chương 6</span>
              <h2 className="text-3xl md:text-4xl font-playfair text-sepia mb-6 uppercase tracking-wider border-b-3 border-indigo-400/40 pb-4 transition-all duration-300 group-hover:border-indigo-400/70 group-hover:text-indigo-900">
                Định Hướng Và Giải Pháp
              </h2>
            </div>
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-ink-old">
              {/* Section 6.1 */}
              <h3 className="text-3xl font-prata text-sepia mt-12 mb-6 tracking-tight leading-tight">1. Phát triển kinh tế số</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Kinh tế số là toàn bộ các hoạt động kinh tế dựa trên việc sử dụng dữ liệu số và các nền tảng công nghệ số để tạo ra giá trị, hàng hóa và dịch vụ. Trong đó, các công nghệ cốt lõi bao gồm Internet, trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data), điện toán đám mây (Cloud Computing) và Internet vạn vật (IoT).
              </p>
              

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Định hướng:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Thúc đẩy chuyển đổi số trong doanh nghiệp</li>
                <li>Phát triển thương mại điện tử</li>
                <li>Ứng dụng công nghệ trong quản lý và sản xuất</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Thanh toán không tiền mặt</li>
                <li>Mua sắm online</li>
                <li>Doanh nghiệp vận hành trên nền tảng số</li>
              </ul>

              

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Ý nghĩa:</h4>
              <div className="bg-gold-classic/10 border-l-4 border-gold-classic p-4 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Tăng năng suất</li>
                  <li>Giảm chi phí</li>
                  <li>Tạo mô hình kinh doanh mới</li>
                </ul>
              </div>

              {/* Section 6.2 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">2. Phát triển công nghệ cao</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Khái niệm:</h4>
              <p className="leading-loose text-justify mb-4">
                Tập trung vào các ngành có hàm lượng tri thức và công nghệ lớn:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>AI (trí tuệ nhân tạo)</li>
                <li>Robot</li>
                <li>Bán dẫn</li>
                <li>Năng lượng tái tạo</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Định hướng:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Đầu tư vào nghiên cứu và phát triển (R&D)</li>
                <li>Làm chủ công nghệ lõi</li>
                <li>Khuyến khích đổi mới sáng tạo</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Sản xuất thông minh</li>
                <li>Tự động hóa nhà máy</li>
                <li>Phát triển sản phẩm công nghệ "Make in Vietnam"</li>
              </ul>

         

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Ý nghĩa:</h4>
              <div className="bg-gold-classic/10 border-l-4 border-gold-classic p-4 mb-8">
                <p className="text-sm font-semibold text-sepia mb-2">👉 Đây là yếu tố quyết định để:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Thoát khỏi bẫy thu nhập trung bình</li>
                  <li>Nâng cao vị thế quốc gia</li>
                </ul>
              </div>

              {/* Section 6.3 */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">3. Phát triển doanh nghiệp Việt Nam</h3>
              
              <h4 className="text-xl font-playfair text-sepia/90 mt-6 mb-3">Mục tiêu:</h4>
              <p className="leading-loose text-justify mb-4">
                Xây dựng doanh nghiệp trong nước đủ mạnh để:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Cạnh tranh quốc tế</li>
                <li>Làm chủ chuỗi giá trị</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Định hướng:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-4">
                <li>Hỗ trợ doanh nghiệp nhỏ và vừa</li>
                <li>Phát triển doanh nghiệp công nghệ</li>
                <li>Xây dựng thương hiệu Việt</li>
              </ul>

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">👉 Biểu hiện:</h4>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink-old/90 mb-6">
                <li>Doanh nghiệp Việt tham gia sâu vào chuỗi cung ứng</li>
                <li>Xuất khẩu sản phẩm mang thương hiệu Việt</li>
                <li>Đầu tư ra nước ngoài</li>
              </ul>

       

              <h4 className="text-lg font-playfair text-sepia/90 mt-6 mb-3">📌 Vấn đề cần giải quyết:</h4>
              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Doanh nghiệp nội còn yếu</li>
                  <li>Thiếu vốn, công nghệ, kinh nghiệm</li>
                </ul>
              </div>

              {/* Strategic Focus */}
              

              {/* Quick Understanding */}
              <h3 className="text-2xl font-playfair text-sepia mt-10 mb-4 tracking-wider">⚡ Hiểu nhanh trong 30 giây</h3>
              <div className="bg-gold-classic/5 p-6 border border-gold-classic/20 mb-6">
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 mb-4">
                  <li><strong>Kinh tế số</strong> → thay đổi cách vận hành</li>
                  <li><strong>Công nghệ cao</strong> → nâng giá trị sản xuất</li>
                  <li><strong>Doanh nghiệp Việt</strong> → giữ giá trị trong nước</li>
                </ul>
                <div className="bg-parchment-light p-3 rounded border border-gold-classic/30 mt-4">
                  <p className="text-sm font-semibold text-sepia mb-2">👉 Mục tiêu cuối cùng:</p>
                  <p className="text-sm text-ink-old/90">Tự chủ kinh tế và phát triển bền vững</p>
                </div>
              </div>

              {/* Important Notes */}
              <h4 className="text-lg font-playfair text-sepia/90 mt-8 mb-3">📌 Ghi nhớ quan trọng</h4>
              <div className="bg-sepia/10 border-l-4 border-sepia p-4 mb-6">
                <p className="text-sm font-semibold text-sepia mb-3">👉 Muốn CNH – HĐH thành công, Việt Nam phải:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-old/90 text-sm">
                  <li>Không chỉ sản xuất</li>
                  <li>Mà phải làm chủ công nghệ và thị trường</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-gold-classic/10 p-6 border border-gold-classic/20">
                <h4 className="text-lg font-playfair text-sepia mb-3">🎯 Kết luận</h4>
                <p className="text-ink-old/90 text-sm mb-3">
                  Định hướng CNH – HĐH hiện nay không còn là:
                </p>
                <p className="text-sm font-semibold text-sepia mb-4">
                  👉 "làm nhiều hơn"
                </p>
                <p className="text-ink-old/90 text-sm mb-2">
                  Mà là:
                </p>
                <p className="text-sm font-semibold text-sepia">
                  👉 "làm thông minh hơn – giá trị cao hơn – do người Việt làm chủ"
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar TOC */}
        <aside className="lg:col-span-4 self-start sticky top-32 hidden lg:block" style={{
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
                  <a 
                    href={`#${item.id}`} 
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
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      {/* Custom Animations & Styling */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced typography */
        h1, h2, h3 {
          word-spacing: 0.1em;
        }
        
        h2 {
          letter-spacing: -0.01em;
        }
        
        h3 {
          letter-spacing: -0.005em;
        }
        
        /* Enhanced list styling */
        .prose ul li {
          margin-top: 0.75rem;
          line-height: 1.8;
        }
        
        .prose p {
          letter-spacing: 0.3px;
        }
        
        /* Improved focus states for accessibility */
        a:focus-visible {
          outline: 2px solid #b08d57;
          outline-offset: 3px;
          border-radius: 0.375rem;
        }
        
        /* Smooth hover transitions */
        button, a {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Better prose styling */
        .prose {
          --tw-prose-borders: #d4a574;
        }
        
        /* Enhanced paragraph spacing */
        .prose p + p {
          margin-top: 1.5rem;
        }
        
        /* Improved heading spacing */
        .prose h3 + p {
          margin-top: 1.25rem;
        }
        
        /* Better list item styling */
        .prose ul > li::marker {
          color: #b08d57;
          font-weight: 600;
        }
        
        /* Text shadow for depth */
        h1 {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        /* Refined selection styling */
        ::selection {
          background-color: rgba(176, 141, 87, 0.3);
          color: inherit;
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-property: color, background-color, border-color, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
        }
      `}</style>
    </div>
  )
}

export default Theory
