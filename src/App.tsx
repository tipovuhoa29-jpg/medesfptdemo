/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  FileText, 
  ChevronRight, 
  Menu, 
  X, 
  Globe, 
  Award,
  BookOpen,
  Mail,
  Cpu,
  ArrowRight,
  Microchip,
  Lightbulb,
  Rocket,
  Presentation,
  Facebook,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const FPT_LOGO = "https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Dai-hoc-FPT.png";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Đồng hành', href: '#partners' },
    { name: 'Nội dung', href: '#content' },
    { name: 'Diễn giả', href: '#speakers' },
    { name: 'Kỷ yếu', href: '#submission' },
  ];

  return (
    <div className="fixed w-full z-50">
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={FPT_LOGO} 
              alt="FPT Logo" 
              className="h-10 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-semibold transition-colors hover:text-fpt-orange ${scrolled ? 'text-fpt-dark' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#cta" className="bg-fpt-orange hover:bg-fpt-orange/90 text-white px-6 py-2.5 rounded-sm font-bold text-sm transition-all shadow-lg shadow-fpt-orange/20 uppercase tracking-wider">
              Đăng ký ngay
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={scrolled ? 'text-fpt-dark' : 'text-white'} /> : <Menu className={scrolled ? 'text-fpt-dark' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 md:hidden flex flex-col gap-4 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-fpt-dark font-bold py-2 border-b border-slate-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a href="#cta" className="bg-fpt-orange text-white px-5 py-4 rounded-sm text-center font-bold mt-2 uppercase tracking-widest">
                Đăng ký ngay
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const SectionTitle = ({ title, subtitle, light = false, align = 'center' }: { title: string, subtitle?: string, light?: boolean, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-headline font-extrabold mb-4 uppercase tracking-tight ${light ? 'text-white' : 'text-fpt-dark'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-lg font-medium ${light ? 'text-white/80' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`w-24 h-1.5 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''} ${light ? 'bg-fpt-orange' : 'bg-fpt-orange'}`}></div>
  </div>
);

const SlantedFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 fpt-skew bg-fpt-blue/10 -z-10"></div>
    <div className="fpt-skew overflow-hidden border-l-8 border-fpt-orange shadow-2xl">
      <div className="fpt-skew-reverse scale-110">
        {children}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-fpt-orange/20 selection:text-fpt-orange">
      <Navbar />

      {/* SECTION 1: HERO - GIỚI THIỆU TỔNG QUAN */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* Full-width Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920" 
            alt="FPT University Futuristic Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-fpt-dark/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-fpt-orange text-white px-6 py-2 font-bold text-sm mb-8 fpt-skew">
              <span className="fpt-skew-reverse inline-block tracking-widest uppercase">Hội nghị Quốc tế Thường niên</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-white mb-8 leading-tight">
              Khu Công nghệ cao <br />
              <span className="text-fpt-orange">Lần thứ 8 – Năm 2026</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-12 font-medium italic max-w-4xl mx-auto">
              "Tiên phong chuyển đổi số trong giáo dục và công nghệ"
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <a href="#cta" className="bg-fpt-orange hover:bg-fpt-orange/90 text-white px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest text-center">
                Đăng ký ngay
              </a>
              <a href="#content" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold text-base md:text-lg transition-all backdrop-blur-md uppercase tracking-widest text-center">
                Khám phá sự kiện
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-fpt-orange rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: ĐƠN VỊ TỔ CHỨC */}
      <section id="partners" className="py-24 bg-fpt-gray">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Đơn vị tổ chức" 
            subtitle="Sự phối hợp chặt chẽ giữa các cơ quan chỉ đạo và hệ sinh thái giáo dục FPT."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {[
              { name: "Đơn vị chỉ đạo", logo: FPT_LOGO },
              { name: "FPT Education", logo: FPT_LOGO },
              { name: "FPT University", logo: FPT_LOGO },
              { name: "Đơn vị phối hợp", logo: FPT_LOGO }
            ].map((partner, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="group relative flex flex-col items-center"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 border border-transparent group-hover:border-fpt-orange/20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 w-auto object-contain" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DIỄN GIẢ TIÊU BIỂU */}
      <section id="speakers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Diễn giả tiêu biểu" subtitle="Những chuyên gia hàng đầu dẫn dắt xu hướng chuyển đổi số toàn cầu." />
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Lê Trường Tùng", role: "Chủ tịch Hội đồng trường, ĐH FPT", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
              { name: "Prof. Sarah Johnson", role: "AI Research Lead, TechGlobal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Nguyễn Thế Phương", role: "CTO FPT Smart Cloud", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
            ].map((speaker, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-fpt-gray group-hover:border-fpt-orange transition-colors duration-500 shadow-2xl">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-fpt-orange text-white px-4 py-1 text-xs font-bold fpt-skew">
                    <span className="fpt-skew-reverse inline-block">KEYNOTE</span>
                  </div>
                </div>
                <h4 className="text-2xl font-headline font-extrabold text-fpt-dark mb-2">{speaker.name}</h4>
                <p className="text-slate-500 font-medium">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NỘI DUNG SỰ KIỆN (BENTO GRID) */}
      <section id="content" className="py-24 bg-fpt-gray">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Nội dung sự kiện" align="left" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px]">
            {/* Hội nghị Quốc tế */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 lg:col-span-4 lg:row-span-2 bg-fpt-blue rounded-3xl p-10 text-white relative overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <Presentation className="mb-6 text-fpt-orange" size={48} />
                <h3 className="text-3xl font-headline font-extrabold mb-4">Hội nghị Quốc tế</h3>
                <p className="text-white/80 text-lg max-w-md">Diễn đàn học thuật chuyên sâu với sự tham gia của các học giả quốc tế và chuyên gia đầu ngành.</p>
              </div>
            </motion.div>

            {/* Triển lãm công nghệ */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-fpt-green rounded-3xl p-8 text-white relative overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <Cpu className="mb-4 text-white" size={40} />
                <h3 className="text-2xl font-bold mb-2">Triển lãm công nghệ</h3>
                <p className="text-white/80 text-sm">Trình diễn Robotics, AI và các giải pháp giáo dục thông minh.</p>
              </div>
            </motion.div>

            {/* Startup Pitchfest */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 border-2 border-fpt-orange group"
            >
              <Rocket className="text-fpt-orange mb-4" size={32} />
              <h3 className="text-xl font-bold text-fpt-dark mb-2">Startup Pitchfest 2026</h3>
              <p className="text-slate-500 text-sm">Đấu trường khởi nghiệp dành cho những ý tưởng thay đổi thế giới.</p>
            </motion.div>

            {/* Thiết kế vi mạch */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:col-span-2 bg-fpt-dark rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fpt-blue/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Microchip className="text-fpt-blue mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Thiết kế vi mạch</h3>
              <p className="text-white/60 text-sm">Tương lai của ngành bán dẫn tại Việt Nam.</p>
            </motion.div>

            {/* Ý tưởng đổi mới & Hội thảo */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 flex items-center gap-4 shadow-sm"
            >
              <div className="w-12 h-12 bg-fpt-orange/10 text-fpt-orange rounded-full flex items-center justify-center shrink-0">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="font-bold text-fpt-dark">Ý tưởng đổi mới</h3>
                <p className="text-xs text-slate-400">Sáng tạo không giới hạn.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THỜI GIAN & ĐỊA ĐIỂM */}
      <section id="venue" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-fpt-dark rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-full bg-fpt-blue fpt-skew translate-x-1/2 opacity-20"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-fpt-orange rounded-2xl flex items-center justify-center shrink-0">
                  <Calendar className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-fpt-orange font-bold uppercase tracking-widest text-xs mb-1">Thời gian</p>
                  <p className="text-2xl font-bold">20 - 22 Tháng 10, 2026</p>
                  <p className="text-white/60 text-sm">08:00 AM - 05:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-fpt-blue rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-fpt-blue font-bold uppercase tracking-widest text-xs mb-1">Địa điểm</p>
                  <p className="text-2xl font-bold">Đại học FPT Hà Nội</p>
                  <p className="text-white/60 text-sm">Khu Công nghệ cao Hòa Lạc, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: GỬI BÀI THAM LUẬN (CALL FOR PAPERS) */}
      <section id="submission" className="py-24 bg-fpt-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle title="Gửi bài tham luận" align="left" />
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-fpt-blue/10 text-fpt-blue rounded-full flex items-center justify-center shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-fpt-dark mb-2">Chủ đề nghiên cứu</h4>
                    <p className="text-slate-600">AI trong giáo dục, Chuyển đổi số, Công nghệ bán dẫn và Phát triển bền vững.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-fpt-orange/10 text-fpt-orange rounded-full flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-fpt-dark mb-2">Mốc thời gian quan trọng</h4>
                    <p className="text-slate-600">Hạn cuối nộp bài: 15/08/2026. Thông báo kết quả: 01/09/2026.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-fpt-green/10 text-fpt-green rounded-full flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-fpt-dark mb-2">Kỷ yếu hội thảo</h4>
                    <p className="text-slate-600">Các bài báo xuất sắc sẽ được xuất bản trong Kỷ yếu có chỉ số ISBN.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-fpt-blue/5 rounded-3xl fpt-skew -rotate-3"></div>
              <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                <h5 className="text-2xl font-bold text-fpt-dark mb-6">Quy định nộp bài</h5>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex items-center gap-3"><ChevronRight className="text-fpt-orange" size={18} /> Ngôn ngữ: Tiếng Anh hoặc Tiếng Việt.</li>
                  <li className="flex items-center gap-3"><ChevronRight className="text-fpt-orange" size={18} /> Định dạng: File PDF theo mẫu của ban tổ chức.</li>
                  <li className="flex items-center gap-3"><ChevronRight className="text-fpt-orange" size={18} /> Độ dài: Từ 5 đến 10 trang A4.</li>
                </ul>
                <button className="w-full bg-fpt-dark text-white py-4 rounded-sm font-bold hover:bg-fpt-blue transition-colors uppercase tracking-widest">
                  Tải mẫu bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ĐĂNG KÝ (CALL TO ACTION) */}
      <section id="cta" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Đăng ký tham gia" subtitle="Hãy chọn hình thức tham gia phù hợp để đồng hành cùng chúng tôi." />
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tài trợ */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-fpt-orange flex flex-col h-full"
            >
              <Award className="text-fpt-orange mb-6" size={48} />
              <h3 className="text-2xl font-bold text-fpt-dark mb-4">Đăng ký Tài trợ</h3>
              <p className="text-slate-500 mb-8 flex-grow">Đồng hành cùng sự kiện với tư cách nhà tài trợ để quảng bá thương hiệu.</p>
              <a href="https://forms.google.com/sponsor" target="_blank" className="bg-fpt-orange text-white py-4 rounded-sm font-bold text-center hover:bg-fpt-orange/90 transition-all uppercase tracking-widest">
                Đăng ký ngay
              </a>
            </motion.div>

            {/* Triển lãm */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-fpt-blue flex flex-col h-full"
            >
              <Rocket className="text-fpt-blue mb-6" size={48} />
              <h3 className="text-2xl font-bold text-fpt-dark mb-4">Gian hàng Triển lãm</h3>
              <p className="text-slate-500 mb-8 flex-grow">Đăng ký gian hàng để trình diễn các giải pháp công nghệ đột phá của bạn.</p>
              <a href="https://forms.google.com/exhibition" target="_blank" className="bg-fpt-blue text-white py-4 rounded-sm font-bold text-center hover:bg-fpt-blue/90 transition-all uppercase tracking-widest">
                Đăng ký gian hàng
              </a>
            </motion.div>

            {/* Tham dự */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-fpt-green flex flex-col h-full"
            >
              <Users className="text-fpt-green mb-6" size={48} />
              <h3 className="text-2xl font-bold text-fpt-dark mb-4">Tham dự Sự kiện</h3>
              <p className="text-slate-500 mb-8 flex-grow">Đăng ký tham dự với tư cách cá nhân để cập nhật kiến thức và kết nối.</p>
              <a href="https://forms.google.com/attend" target="_blank" className="bg-fpt-green text-white py-4 rounded-sm font-bold text-center hover:bg-fpt-green/90 transition-all uppercase tracking-widest">
                Đăng ký tham dự
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: THÔNG TIN LIÊN HỆ (FOOTER) */}
      <footer className="bg-fpt-dark text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-1 bg-fpt-orange"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <img src={FPT_LOGO} alt="FPT Logo" className="h-12 mb-8 brightness-0 invert" referrerPolicy="no-referrer" />
              <p className="text-slate-400 max-w-md mb-8">
                Hội nghị Quốc tế Thường niên Khu Công nghệ cao lần thứ 8 – Năm 2026. <br />
                Tiên phong chuyển đổi số trong giáo dục và công nghệ.
              </p>
              <div className="flex gap-4">
                {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fpt-blue transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-fpt-orange font-bold uppercase tracking-widest text-sm mb-8">Liên hệ</h5>
              <div className="space-y-4 text-slate-400 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="text-fpt-blue" size={18} />
                  <p>hitech.conf@fpt.edu.vn</p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-fpt-blue" size={18} />
                  <p>www.fpt.edu.vn</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-fpt-orange font-bold uppercase tracking-widest text-sm mb-8">Địa chỉ</h5>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="text-fpt-blue shrink-0" size={18} />
                <p>Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs uppercase tracking-widest">
            <p>© 2026 FPT Education. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Điều khoản</a>
              <a href="#" className="hover:text-white">Bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
