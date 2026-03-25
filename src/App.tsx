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
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Topics', href: '#topics' },
    { name: 'Dates', href: '#dates' },
    { name: 'Submission', href: '#submission' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <div className="fixed w-full z-50">
      <div className="bg-emerald-600 text-white py-2 px-6 text-center text-xs md:text-sm font-medium">
        News: Online attendance is possible for authors who cannot attend
      </div>
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://conferences.sigappfr.org/medes2025/wp-content/uploads/2022/09/medes5.png" 
            alt="MEDES Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>MEDES 2025</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${scrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#submission" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20">
            Submit Paper
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-slate-600 font-medium py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a href="#submission" className="bg-emerald-600 text-white px-5 py-3 rounded-xl text-center font-semibold mt-2">
              Submit Paper
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </div>
  );
};

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-white/70' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`w-20 h-1.5 mx-auto mt-6 rounded-full ${light ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
  </div>
);

const RegistrationForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section id="register" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Registration</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Join Us at MEDES 2025</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Register now to secure your spot at the 17th International Conference on Management of Digital Ecosystems. 
              Whether you're an author, a student, or an industry professional, we look forward to your participation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold">General Inquiries</p>
                  <p className="text-slate-500">contact@medes2025.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold">Venue</p>
                  <p className="text-slate-500">University of Dubai, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Received!</h3>
                <p className="text-slate-500">Thank you for your interest. We will contact you shortly with further details.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">First Name *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane"
                      value={formState.firstName}
                      onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Last Name *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Doe"
                      value={formState.lastName}
                      onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email *</label>
                  <input 
                    required
                    type="email" 
                    placeholder="jane.doe@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Comment or Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your interest in MEDES 2025..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  Complete Registration <ArrowRight size={20} />
                </button>
                <p className="text-center text-xs text-slate-400">
                  * Required fields. By registering, you agree to our terms and privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <Award size={16} />
            <span>The 17th International Conference</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            MEDES <span className="text-emerald-500">2025</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Management of Digital Ecosystems: <br className="hidden md:block" />
            Bridging Intelligence, Connectivity, and Sustainability
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-3 text-white bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <Calendar className="text-emerald-500" />
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Date</p>
                <p className="font-semibold">Nov 17 - 20, 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <MapPin className="text-emerald-500" />
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Location</p>
                <p className="font-semibold">Dubai, UAE</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/25 flex items-center justify-center gap-2">
              Call For Papers <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-md">
              Registration Info
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Introduction</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">About MEDES 2025</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  In the world of the Internet of Things (IoT), the rapid growth and exponential use of digital components leads to the emergence of intelligent environments namely “digital ecosystems” connected to the web and composed of multiple and independent entities such as individuals, organizations, services, software and applications sharing one or several missions and focusing on the interactions and inter-relationships among them.
                </p>
                <p>
                  With the help of computational intelligence, these digital ecosystems can exhibit new self-* properties (such as self-management, self-healing and self-configuration) environments, thanks to the re-combination and evolution of its “digital components”, in which resources provided by each entity are properly conserved, managed and used. The underlying web-based resources mainly comprehend big data management, innovative services, smart and self-* properties platforms.
                </p>
                <p>
                  Due to the multi-disciplinary nature of digital ecosystems, they are highly complex to study and design. This also leads to a poor understanding as to how managing resources will empower digital ecosystems to be innovative, intelligent and value-creating. The application of Information Technologies has the potential to enable the understanding of how entities request resources and ultimately interact to create benefits and added value, impacting business practices and knowledge. These technologies can be improved through novel techniques, models and methodologies for fields such as big data management, web technologies, networking, security, human-computer interactions, artificial intelligence, e-services and self-organizing systems to support the establishment of digital ecosystems and manage their resources.
                </p>
                <p>
                  The International Conference on Management of Digital EcoSystems (MEDES) aims to develop and bring together a diverse community from academia, research laboratories and industry interested in exploring the manifold challenges and issues related to web technologies and resource management of Digital Ecosystems and how current approaches and technologies can be evolved and adapted to this end. The conference seeks related original research papers, industrial papers and proposals for demonstrations, tutorials and workshops.
                </p>
                <p className="font-semibold text-slate-900 pt-4 border-t border-slate-100">
                  The conference is in collaboration with ACM SIGAPP and the Proceedings will be published and indexed by Springer CCIS.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/3 sticky top-32"
            >
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                <img 
                  src="https://conferences.sigappfr.org/medes2025/wp-content/uploads/2025/01/citations_per_year3-550x245.png" 
                  alt="Citations per year" 
                  className="w-full h-auto rounded-xl shadow-md mb-4"
                  referrerPolicy="no-referrer"
                />
                <p className="text-xs text-slate-400 text-center italic">Citations per year - MEDES Impact</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Conference Topics" 
            subtitle="MEDES 2025 covers a wide range of topics related to the management and evolution of digital ecosystems."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe className="text-emerald-600" />, 
                title: "Digital Ecosystem Infrastructure", 
                desc: "Cloud computing, edge computing, IoT architectures, and network protocols for connected systems." 
              },
              { 
                icon: <Users className="text-emerald-600" />, 
                title: "Data Management & Analytics", 
                desc: "Big data processing, data mining, semantic web, and knowledge discovery in complex ecosystems." 
              },
              { 
                icon: <Award className="text-emerald-600" />, 
                title: "AI & Machine Learning", 
                desc: "Intelligent agents, deep learning applications, and autonomous decision-making in digital environments." 
              },
              { 
                icon: <FileText className="text-emerald-600" />, 
                title: "Security & Privacy", 
                desc: "Blockchain, cybersecurity, trust management, and privacy-preserving technologies for digital assets." 
              },
              { 
                icon: <BookOpen className="text-emerald-600" />, 
                title: "Human-Centric Systems", 
                desc: "Social networks, collaborative platforms, and human-machine interaction in digital ecosystems." 
              },
              { 
                icon: <Clock className="text-emerald-600" />, 
                title: "Sustainable Ecosystems", 
                desc: "Green computing, energy-efficient systems, and digital solutions for environmental sustainability." 
              }
            ].map((topic, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{topic.title}</h3>
                <p className="text-slate-500 leading-relaxed">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Important Dates" 
            subtitle="Keep track of the key deadlines for paper submission and registration."
          />
          
          <div className="max-w-4xl mx-auto">
            {[
              { date: "June 15, 2025", event: "Paper Submission Deadline", status: "upcoming" },
              { date: "August 30, 2025", event: "Notification of Acceptance", status: "upcoming" },
              { date: "September 20, 2025", event: "Camera Ready Submission", status: "upcoming" },
              { date: "October 05, 2025", event: "Early Bird Registration", status: "upcoming" },
              { date: "Nov 17-20, 2025", event: "Conference Dates", status: "upcoming" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-2xl"
              >
                <div className="hidden sm:flex flex-col items-center justify-center w-32 h-20 bg-emerald-50 rounded-2xl text-emerald-600">
                  <p className="text-xs font-bold uppercase tracking-tighter">2025</p>
                  <p className="text-lg font-extrabold">{item.date.split(',')[0]}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-900">{item.event}</h4>
                  <p className="text-slate-500 sm:hidden">{item.date}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                  <Clock size={14} />
                  <span>Upcoming</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section id="submission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-emerald-600/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Call For Papers & Submissions</h2>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                  We invite researchers and practitioners to submit their original research papers to MEDES 2025. All accepted papers will be published in the conference proceedings and indexed in major digital libraries.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 p-1 rounded-full"><ChevronRight size={16} /></div>
                    <span>Full Research Papers (up to 8 pages)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 p-1 rounded-full"><ChevronRight size={16} /></div>
                    <span>Short Papers & Posters (up to 4 pages)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 p-1 rounded-full"><ChevronRight size={16} /></div>
                    <span>Workshop Proposals</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
                    Submit via EasyChair
                  </button>
                  <button className="bg-transparent border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
                    Download Template
                  </button>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-6">Submission Guidelines</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 font-bold">1</div>
                    <p className="text-white/80">Papers must be original and not submitted elsewhere.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 font-bold">2</div>
                    <p className="text-white/80">Follow the standard ACM/IEEE conference template format.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 font-bold">3</div>
                    <p className="text-white/80">Submissions must be in PDF format through the online system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegistrationForm />

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://conferences.sigappfr.org/medes2025/wp-content/uploads/2022/09/medes5.png" 
                  alt="MEDES Logo" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-2xl tracking-tight">MEDES 2025</span>
              </div>
              <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                The International Conference on Management of Digital Ecosystems. A premier forum for researchers and practitioners to exchange ideas on the management of digital ecosystems.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"><Globe size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors"><Mail size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-emerald-500 transition-colors">About</a></li>
                <li><a href="#topics" className="hover:text-emerald-500 transition-colors">Topics</a></li>
                <li><a href="#dates" className="hover:text-emerald-500 transition-colors">Dates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                  <span>Dubai, United Arab Emirates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-emerald-500 shrink-0 mt-1" />
                  <span>contact@medes2025.org</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>© 2025 MEDES Conference. All rights reserved. Organized by SIGAPP.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
