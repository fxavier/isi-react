import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-transparent pt-20 md:pt-24">
      {/* Subtle Animated Background Patterns Only */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-12 fade-in">
              <img
                src="/logo.png"
                alt="ISI & Serviços - Informática, Serigrafia, Imobiliária & Limpeza"
                className="mx-auto h-24 md:h-28 lg:h-32 w-auto object-contain"
                loading="eager"
              />
            </div>

            {/* Hero Headline */}
            <div className="slide-up mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                <span className="block mb-4">
                  <span className="text-gradient-premium">Soluções</span>
                </span>
                <span className="block mb-4">
                  <span className="text-neutral-900 dark:text-white">Integradas em</span>
                </span>
                <span className="block">
                  <span className="text-gradient-isi">Tecnologia</span>
                  <span className="text-neutral-900 dark:text-white/90"> & </span>
                  <span className="text-gradient-premium">Serviços</span>
                </span>
              </h1>

              {/* Premium Badge */}
              <div className="inline-flex items-center bg-gradient-hero text-white rounded-full px-6 py-3 mb-8 shadow-premium">
                <div className="w-3 h-3 bg-white rounded-full mr-3 pulse-animation"></div>
                <span className="text-sm font-medium tracking-wide">100% EMPRESA MOÇAMBICANA</span>
              </div>

              <p className="max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl mb-12 text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                Especializada no desenvolvimento de{' '}
                <span className="font-semibold text-gradient-isi">soluções avançadas</span> e serviços 
                profissionalizados em{' '}
                <span className="font-semibold text-neutral-900 dark:text-white">TI, serigrafia, imobiliária e limpeza</span>, 
                oferecendo qualidade e inovação para o mercado nacional.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="slide-up mb-16">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="group relative bg-gradient-hero text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-500 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-600 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    Pedir Proposta
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('about')}
                  className="group bg-white/10 backdrop-blur-md hover:bg-gradient-hero text-neutral-900 hover:text-white dark:text-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-500 border-2 border-neutral-300 dark:border-white/30 hover:border-primary-500 transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Explorar Serviços
                  </span>
                </button>
              </div>
            </div>

            {/* Key Features Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 fade-in">
              {[
                { title: 'Informática', icon: '💻', color: 'from-blue-500 to-cyan-500' },
                { title: 'Serigrafia', icon: '🎨', color: 'from-purple-500 to-pink-500' },
                { title: 'Imobiliária', icon: '🏢', color: 'from-green-500 to-emerald-500' },
                { title: 'Limpeza', icon: '✨', color: 'from-yellow-500 to-orange-500' },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 dark:bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-white/20 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-500 hover:shadow-premium-hover"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white group-hover:text-gradient-isi transition-all duration-300">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: '50+', label: 'Clientes Ativos', icon: '👥' },
                { number: '100+', label: 'Projetos Concluídos', icon: '🚀' },
                { number: '10+', label: 'Anos de Experiência', icon: '⭐' },
                { number: '24/7', label: 'Suporte Técnico', icon: '🛡️' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-white/20 rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-500">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient-premium mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-700 dark:text-white/80 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection('about')}
                className="group flex flex-col items-center text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white transition-all duration-300"
                aria-label="Scroll para baixo"
              >
                <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Descobrir Mais
                </span>
                <div className="w-6 h-10 border-2 border-neutral-400 dark:border-white/30 rounded-full p-1 group-hover:border-primary-500 dark:group-hover:border-white/50 transition-colors duration-300">
                  <div className="w-1 h-3 bg-neutral-400 dark:bg-white/50 rounded-full mx-auto animate-bounce"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};