import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Tv, Smartphone, Monitor, Package, Tablet, Star, CheckCircle, Zap, DollarSign, TrendingDown, Users, Award, Calendar, Play, Sparkles } from 'lucide-react';

export default function BlackSeriflixLandingPage() {
  const [activeTab, setActiveTab] = useState('anual');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-11-20T23:59:59').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-green-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header with Glassmorphism */}
      <header className={`fixed w-full top-0.5 z-50 transition-all duration-500 ${scrolled ? 'bg-black/20 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent backdrop-blur-md'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('início')}
              className="text-xl md:text-2xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent relative group cursor-pointer"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:scale-105 inline-block">
                BlackSeriflix
              </span>
            </div>
            
            {/* Minimalist Quick Access Shortcuts */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="px-4 md:px-5 py-2 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full"
              >
                <span className="hidden sm:inline">Como Funciona</span>
                <span className="sm:hidden">Como</span>
              </button>
              
              <button
                onClick={() => {
                  const testSection = document.querySelector('.teste-gratis-section');
                  testSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 md:px-5 py-2 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full"
              >
                <span className="hidden sm:inline">Teste Grátis</span>
                <span className="sm:hidden">Teste</span>
              </button>
              
              <button
                onClick={() => scrollToSection('planos')}
                className="px-5 md:px-6 py-2 text-xs md:text-sm font-semibold text-white bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 rounded-full backdrop-blur-sm"
              >
                <span className="hidden sm:inline">Ver Planos</span>
                <span className="sm:hidden">Planos</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Black Friday with Insane Effects */}
      <section id="início" className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Subtle Grid Pattern - Less Visible */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,107,0,0.5) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,107,0,0.5) 0.5px, transparent 0.5px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Smooth Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        </div>
        
        {/* Radial Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-radial-gradient" style={{
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(255,107,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(34,197,94,0.08) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-black mb-6 relative group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="animate-spin" size={20} />
              BLACK FRIDAY
              <Sparkles className="animate-spin" size={20} style={{ animationDirection: 'reverse' }} />
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-4 relative group cursor-default">
            <span className="relative z-10 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse inline-block hover:scale-105 transition-transform duration-300">
              BLACK FRIDAY
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </h1>
          
          <p className="text-2xl md:text-4xl font-bold text-gray-300 mb-8 animate-pulse">
            CANAIS • FILMES • SÉRIES
          </p>
          
          <div className="mb-8 transform hover:scale-105 transition-all duration-500">
            <p className="text-gray-400 line-through text-xl mb-2 animate-pulse">DE R$ 300/ANO</p>
            <div className="relative inline-block group">
              <p className="text-7xl md:text-9xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 relative z-10 transition-all duration-300 group-hover:scale-110" style={parallaxStyle}>
                R$ 187
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 scale-150"></div>
            </div>
            <p className="text-3xl text-gray-300 font-semibold">/ANO</p>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600/40 to-blue-800/40 px-8 py-4 rounded-2xl border border-blue-500/50 backdrop-blur-sm transform hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Zap className="text-blue-400 animate-pulse relative z-10 group-hover:rotate-12 transition-transform duration-300" size={28} />
              <span className="text-2xl font-bold relative z-10">2 TELAS | R$ 15,58/MÊS</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-600/40 to-green-800/40 px-8 py-4 rounded-2xl border border-green-500/50 backdrop-blur-sm transform hover:scale-110 hover:-rotate-1 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-700/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Users className="text-green-400 animate-bounce relative z-10 group-hover:scale-125 transition-transform duration-300" size={28} />
              <span className="text-2xl font-bold text-green-400 relative z-10">Ou R$ 7,79/mês dividindo</span>
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('planos')}
            className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-16 py-5 rounded-full text-2xl font-black mb-12 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-3">
              <Play className="group-hover:scale-125 group-hover:rotate-90 transition-all duration-500" />
              VER TODOS OS PLANOS
            </span>
          </button>

          <div className="bg-gradient-to-r from-red-900/60 to-red-800/60 border-2 border-red-500 rounded-3xl p-8 max-w-2xl mx-auto backdrop-blur-md shadow-2xl shadow-red-500/50 transform hover:scale-105 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            
            <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
              <Calendar className="text-red-400 animate-bounce" size={36} />
              <p className="text-3xl font-black text-red-400 animate-pulse">⚠️ OFERTA TERMINA EM ⚠️</p>
            </div>
            <div className="text-6xl md:text-7xl font-black text-orange-400 mb-6 animate-pulse relative z-10">
              20 de Novembro
            </div>
            <div className="flex justify-center gap-4 mb-6 relative z-10">
              {[
                { label: 'DIAS', value: countdown.days },
                { label: 'HORAS', value: countdown.hours },
                { label: 'MIN', value: countdown.minutes },
                { label: 'SEG', value: countdown.seconds }
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className="bg-black/70 rounded-xl p-5 min-w-[90px] backdrop-blur-sm border border-orange-500/30 transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group/timer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-black text-orange-400 group-hover/timer:scale-125 transition-transform duration-300">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 relative z-10">Depois voltam os preços normais:</p>
            <p className="text-red-400 font-bold text-xl relative z-10 animate-pulse">R$ 75, R$ 180 e R$ 300</p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-gray-400 animate-bounce">
            <span className="text-lg">👇 ROLE E ESCOLHA SEU PLANO</span>
          </div>
        </div>
      </section>

      {/* Transition Wave - Hero to Como Funciona */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,40 1200,60 L1200,120 L0,120 Z" 
                fill="url(#gradient1)" opacity="0.3"/>
          <path d="M0,20 C300,100 600,60 900,80 C1050,90 1150,70 1200,80 L1200,120 L0,120 Z" 
                fill="url(#gradient2)" opacity="0.3"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b00" />
              <stop offset="50%" stopColor="#ff8800" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#ff6b00" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Como Funciona with 3D Cards */}
      <section id="como-funciona" className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,107,0,0.08) 0%, transparent 60%)'
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-20 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">COMO</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>FUNCIONA?</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                icon: <MessageCircle size={56} />,
                title: 'Chama no WhatsApp',
                description: 'Clica no botão e fala com a gente.',
                gradient: 'from-orange-500 to-orange-600',
                delay: '0s'
              },
              {
                number: '2',
                icon: <CheckCircle size={56} />,
                title: 'Teste ou Assine',
                description: 'Escolha testar grátis ou ir direto pro plano Black Friday',
                gradient: 'from-green-500 to-green-600',
                delay: '0.2s'
              },
              {
                number: '3',
                icon: <Play size={56} />,
                title: 'Aproveite!',
                description: 'Acesso liberado na hora. Assista em qualquer dispositivo!',
                gradient: 'from-blue-500 to-blue-600',
                delay: '0.4s'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-700 cursor-pointer perspective-1000"
                style={{ 
                  animationDelay: step.delay,
                  transformStyle: 'preserve-3d'
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-orange-500/10 rounded-3xl transition-all duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-orange-500/30 blur-2xl rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-500/30 blur-2xl rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${step.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black mb-6 shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="transform group-hover:scale-125 transition-transform duration-300">{step.number}</span>
                  </div>
                  
                  <div className="text-orange-500 mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-orange-500 transition-colors duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Fade - Como Funciona to Teste Grátis */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/40 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-500/40 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Teste Grátis with Glowing Effect */}
      <section className="teste-gratis-section py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Soft Green Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
        
        {/* Subtle Gradient */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 70%)'
        }}></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 rounded-[3rem] border-4 border-green-500 shadow-2xl transform hover:scale-105 transition-all duration-700 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-3 rounded-full font-black mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="animate-spin" size={20} />
                  🎁 TESTE GRÁTIS
                </span>
              </div>
              
              <h2 className="text-6xl font-black mb-6 text-white group-hover:text-green-400 transition-colors duration-500">
                SEM COMPROMISSO
              </h2>
              <p className="text-3xl text-green-400 font-black mb-12 animate-pulse">
                Experimente Antes de Pagar!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { text: '✅ Sem cartão', icon: <CheckCircle className="text-green-400" size={28} /> },
                  { text: '✅ Sem burocracia', icon: <CheckCircle className="text-green-400" size={28} /> },
                  { text: '✅ Ativação imediata', icon: <Zap className="text-yellow-400" size={28} /> },
                  { text: '✅ Cancele quando quiser', icon: <CheckCircle className="text-green-400" size={28} /> }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gradient-to-r from-green-900/40 to-green-800/40 p-5 rounded-2xl border border-green-500/30 hover:border-green-500 transition-all duration-500 transform hover:scale-110 hover:rotate-1 cursor-pointer group/item relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent translate-x-full group-hover/item:translate-x-0 transition-transform duration-500"></div>
                    <div className="transform group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 relative z-10">
                      {item.icon}
                    </div>
                    <span className="font-bold text-xl relative z-10">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-6 rounded-full text-3xl font-black flex items-center justify-center gap-4 relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-700"></div>
                <MessageCircle size={32} className="relative z-10 transform group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-300" />
                <span className="relative z-10">SOLICITAR NO WHATSAPP</span>
              </button>
              
              <p className="text-center mt-6 text-gray-400 flex items-center justify-center gap-2 text-lg">
                <Zap size={20} className="text-orange-500 animate-pulse" />
                Resposta em 5 minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Wave - Teste Grátis to Conteúdo */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C400,100 800,0 1200,60 L1200,120 L0,120 Z" 
                fill="url(#gradient3)" opacity="0.4"/>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Conteúdo Exclusivo with Stagger Animation */}
      <section id="conteúdo" className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Soft Multi-Color Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-6 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">CONTEÚDO</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>EXCLUSIVO</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          <p className="text-2xl text-gray-400 text-center mb-20 animate-pulse">
            Milhares de opções para toda família
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Tv size={48} />,
                title: 'Canais ao Vivo',
                items: ['Esportes (Premiere, ESPN)', 'Notícias (Globo, CNN)', 'Entretenimento', 'Filmes e séries 24h'],
                gradient: 'from-red-500 to-red-600',
                emoji: '📺'
              },
              {
                icon: <Play size={48} />,
                title: 'Filmes',
                items: ['Lançamentos', 'Clássicos', 'Ação, Terror, Comédia', 'Atualizações semanais'],
                gradient: 'from-blue-500 to-blue-600',
                emoji: '🎬'
              },
              {
                icon: <Tv size={48} />,
                title: 'Séries e Novelas',
                items: ['Netflix, Prime, Disney+', 'HBO, Max originais', 'Novelas brasileiras', 'Séries internacionais'],
                gradient: 'from-purple-500 to-purple-600',
                emoji: '📺'
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-orange-500/10 transition-all duration-700"></div>
                <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                  {category.emoji}
                </div>
                
                <div className="relative z-10">
                  <div className="text-orange-500 mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white group-hover:text-orange-500 transition-colors duration-500">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        <span className="text-blue-400 transform group-hover:scale-125 transition-transform duration-300">▶️</span> 
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🎭', title: 'Doramas', items: ['Coreanos', 'Chineses', 'Japoneses', 'Tailandeses'] },
              { emoji: '👶', title: 'Infantil', items: ['Desenhos animados', 'Filmes Disney', 'Nickelodeon', 'Cartoon Network'] },
              { emoji: '📺', title: 'Reality Shows', items: ['BBB ao vivo', 'A Fazenda', 'MasterChef', 'The Voice'] },
              { emoji: '📚', title: 'Documentários', items: ['Natureza', 'História', 'Ciência', 'True Crime'] },
              { emoji: '🌟', title: 'Animes', items: ['Naruto, One Piece', 'Attack on Titan', 'Demon Slayer', 'Lançamentos semanais'] },
              { emoji: '🔞', title: 'Adulto +18', items: ['Conteúdo exclusivo', 'Canais internacionais', 'Totalmente opcional', 'Controle parental'] }
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-orange-500/10 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 transform group-hover:scale-150 group-hover:rotate-12 transition-all duration-500">
                    {category.emoji}
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white group-hover:text-orange-500 transition-colors duration-500">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        <span className="text-blue-400 transform group-hover:scale-125 transition-transform duration-300">▶️</span> 
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Gradient - Conteúdo to Dispositivos */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-orange-500/20 blur-2xl"></div>
        </div>
      </div>

      {/* Dispositivos Compatíveis with 3D Hover */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Soft Colored Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-20 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">DISPOSITIVOS</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>COMPATÍVEIS</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: <Tv size={72} />, name: 'Smart TV', desc: 'Samsung, LG, Android, Roku' },
              { icon: <Smartphone size={72} />, name: 'Celular', desc: 'Android e iOS' },
              { icon: <Monitor size={72} />, name: 'PC/Notebook', desc: 'Windows e Mac' },
              { icon: <Package size={72} />, name: 'TV BOX', desc: 'Todos os modelos' },
              { icon: <Tablet size={72} />, name: 'Tablet', desc: 'iPad e Android' }
            ].map((device, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-700 text-center cursor-pointer relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/30 group-hover:to-orange-500/10 transition-all duration-700 rounded-3xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-orange-500 mb-6 flex justify-center transform group-hover:scale-150 group-hover:-rotate-12 transition-all duration-500">
                    {device.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-white group-hover:text-orange-500 transition-colors duration-500">
                    {device.name}
                  </h3>
                  <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {device.desc}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Sparkle - Dispositivos to Por Que Escolher */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z' fill='%23fbbf24'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>

      {/* Por que escolher anual - Continue with similar enhancements... */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Soft Golden Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.1) 0%, transparent 70%)'
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-6 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">💎 POR QUE ESCOLHER</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>ANUAL?</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { icon: <DollarSign size={36} />, title: 'MENOR CUSTO MENSAL', desc: 'R$ 15,58/mês (vs R$ 25)', color: 'from-green-600 to-green-700' },
              { icon: <Zap size={36} />, title: '2 TELAS SIMULTÂNEAS ⚡', desc: 'Assista em 2 dispositivos ao mesmo tempo', color: 'from-blue-600 to-blue-700' },
              { icon: <TrendingDown size={36} />, title: 'MAIOR ECONOMIA', desc: 'Economiza R$ 113 total', color: 'from-orange-600 to-orange-700' },
              { icon: <Calendar size={36} />, title: 'ESQUECE POR 1 ANO', desc: 'Sem preocupação até 2026', color: 'from-purple-600 to-purple-700' },
              { icon: <Users size={36} />, title: 'DIVIDINDO: R$ 7,79/MÊS!', desc: 'Compartilhe com alguém e economize 69%', color: 'from-pink-600 to-pink-700' },
              { icon: <Award size={36} />, title: '96% ESCOLHEM ESSE!', desc: 'O plano mais popular', color: 'from-yellow-600 to-yellow-700' }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${benefit.color} p-8 rounded-3xl transform hover:scale-110 hover:rotate-2 transition-all duration-700 cursor-pointer relative overflow-hidden shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-white mb-4 flex justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-black mb-3 text-white text-center transform group-hover:scale-105 transition-transform duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-white/90 text-center leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dica Econômica Section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-2 border-orange-500 rounded-3xl p-10 backdrop-blur-sm transform hover:scale-105 transition-all duration-700 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">💡</span>
                  <h3 className="text-4xl font-black text-orange-500">DICA ECONÔMICA ESPECIAL</h3>
                </div>
                
                <div className="text-2xl font-bold mb-6 text-white">
                  O PLANO ANUAL TEM 2 TELAS!
                </div>
                <div className="text-xl text-gray-300 mb-8">
                  Divida e Economize Ainda Mais
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-black/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
                    <h4 className="text-2xl font-bold mb-6 text-orange-500">COMPARAÇÃO MENSAL:</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                        <span className="text-gray-400 text-lg">📺 MENSAL (1 tela)</span>
                        <span className="font-bold text-xl">R$ 25/mês</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                        <span className="text-gray-400 text-lg">📺 TRIMESTRAL (1 tela)</span>
                        <div className="text-right">
                          <div className="font-bold text-xl">R$ 23,33/mês</div>
                          <div className="text-orange-500 text-sm">Economia: R$ 1,67/mês</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center bg-green-900/40 p-4 rounded-xl border border-green-500">
                        <span className="text-white font-semibold text-lg">📺📺 ANUAL (2 telas)</span>
                        <span className="font-black text-green-400 text-2xl">R$ 15,58/mês</span>
                      </div>
                      <div className="text-center pt-3">
                        <span className="text-orange-500 font-bold text-xl">💰 Economia: R$ 9,42/mês</span>
                        <div className="text-green-400 font-black text-2xl mt-2">🏆 38% MAIS BARATO!</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-8 rounded-2xl border-2 border-green-500 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
                    <h4 className="text-2xl font-bold mb-6 text-green-400">💡 DIVIDINDO O ANUAL:</h4>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-black text-white mb-3">R$ 187 ÷ 2 pessoas</div>
                      <div className="text-6xl font-black text-green-400 mb-3">= R$ 93,50</div>
                      <div className="text-2xl text-gray-300">cada/ano</div>
                    </div>
                    <div className="bg-black/60 p-6 rounded-xl mb-6">
                      <div className="text-5xl font-black text-green-400 text-center mb-3 animate-pulse">
                        R$ 7,79/mês
                      </div>
                      <div className="text-lg text-gray-300 text-center">por pessoa! 💚</div>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Você: R$ 7,79/mês',
                        'Amigo/familiar: R$ 7,79/mês',
                        'Cada um: 1 tela exclusiva'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-white text-lg">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-green-500/30">
                      <div className="text-center font-black text-red-400 text-2xl animate-pulse">🔥 Economia de 69%!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('planos')}
              className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-16 py-5 rounded-full text-2xl font-black overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-700"></div>
              <span className="relative z-10">QUERO O ANUAL POR R$ 187</span>
            </button>
          </div>
        </div>
      </section>

      {/* Transition Fade - Por Que Escolher to Comparação */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-green-500/20"></div>
        </div>
      </div>

      {/* Comparação de Planos with Interactive Table */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Soft Gradient Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-green-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-6xl font-black text-center mb-20 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">COMPARE</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>OS PLANOS</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          
          <div className="overflow-x-auto rounded-3xl border border-gray-700">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-orange-900/60 to-orange-800/60">
                  <th className="p-6 text-left border border-gray-700 text-xl font-black">Característica</th>
                  <th className="p-6 text-center border border-gray-700 text-xl font-black">Mensal</th>
                  <th className="p-6 text-center border border-gray-700 text-xl font-black">Trimestral</th>
                  <th className="p-6 text-center border border-gray-700 text-xl font-black bg-green-900/60">
                    Anual ⭐
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Valor Total', values: ['R$ 25', 'R$ 70', 'R$ 187'], highlight: [false, false, true] },
                  { label: 'Por Mês', values: ['R$ 25,00', 'R$ 23,33/mês', 'R$ 15,58 🔥'], highlight: [false, false, true] },
                  { label: 'Telas', values: ['1', '1', '2 ⚡'], highlight: [false, false, true] },
                  { label: 'Duração', values: ['1 mês', '3 meses', '12 meses'], highlight: [false, false, false] },
                  { label: 'Economia', values: ['-', 'R$ 1,67/mês', 'R$ 9,42/mês'], highlight: [false, false, true] },
                  { label: 'Dividindo', values: ['-', '-', 'R$ 7,79/mês*'], highlight: [false, false, true] },
                  { label: 'Suporte', values: ['Padrão', 'Padrão', 'VIP 🏆'], highlight: [false, false, true] }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-800/70 transition-all duration-300 group/row">
                    <td className="p-6 border border-gray-700 font-bold text-lg group-hover/row:text-orange-500 transition-colors duration-300">
                      {row.label}
                    </td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`p-6 border border-gray-700 text-center text-lg transform group-hover/row:scale-105 transition-all duration-300 ${
                          row.highlight[i] ? 'bg-green-900/40 font-black text-green-400 text-xl' : ''
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-lg text-gray-400">
            <span>* Dividindo com outra pessoa | </span>
            <span className="text-orange-500 font-bold">💡 Quanto maior o plano, menor o custo mensal!</span>
          </div>
        </div>
      </section>

      {/* Transition Wave - Comparação to Planos */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,20 400,80 600,60 C800,40 1000,80 1200,60 L1200,120 L0,120 Z" 
                fill="url(#gradient4)" opacity="0.5"/>
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b00" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Planos with Mega Effects */}
      <section id="planos" className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Soft Spotlight Effect */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.2) 0%, transparent 70%)'
        }}></div>
        
        {/* Subtle Multi-color Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-6 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">ESCOLHA SEU</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>PLANO</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-black mb-12 mx-auto block w-fit shadow-2xl shadow-red-500/50 animate-pulse">
            BLACK FRIDAY
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                name: 'PLANO MENSAL',
                originalPrice: 'R$ 30',
                price: 'R$ 25',
                perMonth: 'R$ 25/mês',
                duration: 'Renovação mensal',
                features: ['1 tela', 'Renovação mensal', 'Suporte padrão', 'Cancele quando quiser'],
                savings: 'Economiza R$ 5',
                button: 'GARANTIR R$ 25',
                buttonColor: 'from-orange-500 to-orange-600',
                popular: false
              },
              {
                name: 'PLANO TRIMESTRAL',
                originalPrice: 'R$ 90',
                price: 'R$ 70',
                perMonth: 'R$ 23,33/mês',
                duration: '3 meses garantidos',
                features: ['1 tela', '3 meses garantidos', 'Sem renovação', ''],
                savings: 'Economiza R$ 20',
                button: 'GARANTIR R$ 70',
                buttonColor: 'from-orange-500 to-orange-600',
                popular: false
              },
              {
                name: 'PLANO ANUAL',
                originalPrice: 'R$ 300',
                price: 'R$ 187',
                perMonth: 'R$ 15,58 🔥',
                duration: '12 meses garantidos',
                features: ['⚡ 2 TELAS SIMULTÂNEAS', '12 meses garantidos', 'Sem renovação', '🏆 Suporte VIP'],
                savings: 'Economiza R$ 113',
                extraInfo: '💚 Ou R$ 7,79/mês dividindo',
                button: 'APROVEITAR R$ 187',
                buttonColor: 'from-green-500 to-green-600',
                popular: true
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br from-gray-900 to-black p-10 rounded-[3rem] border-2 transition-all duration-700 cursor-pointer ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/40 md:-translate-y-8 hover:-translate-y-12' 
                    : 'border-gray-700 hover:border-orange-500 hover:-translate-y-4'
                } transform hover:scale-105`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 ${
                  plan.popular ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'
                }`}></div>
                
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-black shadow-2xl shadow-green-500/50 animate-bounce relative overflow-hidden group/badge">
                      <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/badge:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        <Sparkles size={16} className="animate-spin" />
                        ⭐ MAIS VENDIDO ⭐
                        <Sparkles size={16} className="animate-spin" style={{ animationDirection: 'reverse' }} />
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black mb-6 text-white group-hover:text-orange-500 transition-colors duration-500">
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-gray-400 line-through text-2xl">{plan.originalPrice}</span>
                    </div>
                    <div className="relative group/price">
                      <div className="text-7xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 transform group-hover/price:scale-110 transition-transform duration-300">
                        {plan.price}
                      </div>
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 blur-2xl opacity-30"></div>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-green-400 mb-2">{plan.perMonth}</div>
                    <div className="text-gray-400 text-lg mt-3">{plan.duration}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      feature && (
                        <li 
                          key={i} 
                          className="flex items-center gap-4 transform hover:translate-x-2 transition-all duration-300"
                          style={{ transitionDelay: `${i * 0.05}s` }}
                        >
                          <CheckCircle 
                            className={`flex-shrink-0 ${plan.popular ? 'text-green-400' : 'text-gray-400'} transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} 
                            size={24} 
                          />
                          <span className="text-white text-lg font-medium">{feature}</span>
                        </li>
                      )
                    ))}
                  </ul>

                  <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border border-yellow-500/50 rounded-2xl p-4 mb-6 text-center transform hover:scale-105 transition-all duration-300">
                    <span className="text-yellow-400 font-black text-xl">💰 {plan.savings}</span>
                  </div>

                  {plan.extraInfo && (
                    <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-500/50 rounded-2xl p-4 mb-6 text-center transform hover:scale-105 transition-all duration-300 animate-pulse">
                      <span className="text-green-400 font-black text-xl">{plan.extraInfo}</span>
                    </div>
                  )}

                  <button className={`w-full bg-gradient-to-r ${plan.buttonColor} text-white px-8 py-5 rounded-full text-xl font-black relative overflow-hidden group/btn`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.popular ? 'from-green-600 to-green-700' : 'from-orange-600 to-orange-700'} translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500`}></div>
                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-700"></div>
                    <span className="relative z-10">{plan.button}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos with Carousel Effect */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.1) 0%, transparent 70%)'
        }}></div>
        
        {/* Soft Glows */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-yellow-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-orange-500/08 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '16s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center mb-6 relative group cursor-default">
            <span className="text-orange-500 inline-block transform group-hover:scale-110 transition-all duration-300">O QUE DIZEM</span>{' '}
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>NOSSOS CLIENTES</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: 'Carlos Silva',
                location: 'São Paulo',
                rating: 5,
                text: 'Melhor investimento que fiz! Cancelei todos os streamings e agora tenho tudo em um só lugar. A qualidade é perfeita e o suporte responde super rápido.'
              },
              {
                name: 'Marina Santos',
                location: 'Rio de Janeiro',
                rating: 5,
                text: 'Dívida com minha irmã e ficou muito barato pra cada uma. Assistimos séries diferentes ao mesmo tempo sem travar. Recomendo muito!'
              },
              {
                name: 'Pedro Oliveira',
                location: 'Belo Horizonte',
                rating: 5,
                text: 'Não acreditei quando vi o preço da Black Friday. Testei primeiro, aprovei e agora virei cliente anual. Todos os jogos do Brasileirão em HD!'
              }
            ].map((review, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-orange-500/10 transition-all duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex gap-2 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="text-yellow-400 fill-yellow-400 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
                        size={24}
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-8 text-lg group-hover:text-white transition-colors duration-500 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div>
                    <div className="font-bold text-xl text-white group-hover:text-orange-500 transition-colors duration-300">{review.name}</div>
                    <div className="text-gray-400 text-base mt-1">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final with Pulse Effect */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Minimalist Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Soft Gradient Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/15 via-green-500/10 to-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
        
        {/* Subtle Radial Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,107,0,0.2) 0%, transparent 70%)'
        }}></div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-8 relative group cursor-default">
            <span className="text-white inline-block transform group-hover:scale-110 transition-all duration-300">APROVEITE A</span>{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent inline-block transform group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: '0.1s' }}>
              BLACK FRIDAY!
            </span>
          </h2>
          <p className="text-3xl text-gray-300 mb-12 leading-relaxed">
            Garanta seu plano anual por <span className="text-green-400 font-black text-4xl animate-pulse">R$ 187</span> antes que a promoção acabe!
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-20 py-6 rounded-full text-3xl font-black overflow-hidden group/btn">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white/30 scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-2xl opacity-50 group-hover/btn:opacity-70 animate-pulse"></div>
              <span className="relative z-10 flex items-center gap-4">
                <MessageCircle size={36} className="transform group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-300" />
                GARANTIR MINHA VAGA
              </span>
            </button>
            <p className="text-gray-400 text-xl flex items-center gap-3">
              <CheckCircle className="text-green-400" size={24} />
              Sem compromisso 
              <span className="text-gray-500">•</span>
              <CheckCircle className="text-green-400" size={24} />
              Teste grátis disponível
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-6">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
            BlackSeriflix
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            © 2025 BlackSeriflix. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-8 text-gray-400 text-base">
            <a href="#" className="hover:text-orange-500 transition-all duration-300 transform hover:scale-110">Termos de Uso</a>
            <a href="#" className="hover:text-orange-500 transition-all duration-300 transform hover:scale-110">Política de Privacidade</a>
            <a href="#" className="hover:text-orange-500 transition-all duration-300 transform hover:scale-110">Suporte</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button with Mega Animation */}
      <a
        href="https://wa.me/5586999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-full shadow-2xl z-50 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-2xl opacity-50 group-hover:opacity-70 animate-pulse"></div>
        <MessageCircle size={40} className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce" />
      </a>
    </div>
  );
}