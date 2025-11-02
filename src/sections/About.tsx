import React from 'react';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  const values = [
    {
      title: 'Inovação',
      description: 'Utilizamos as mais recentes tecnologias para oferecer soluções modernas e eficientes.',
      icon: '🚀',
    },
    {
      title: 'Qualidade',
      description: 'Compromisso com a excelência em todos os nossos serviços e produtos.',
      icon: '⭐',
    },
    {
      title: 'Confiança',
      description: 'Parceria sólida com clientes, baseada em transparência e resultados.',
      icon: '🤝',
    },
  ];

  return (
    <Section id="about" className="relative bg-gradient-section dark:bg-gradient-section-dark">
      {/* Background Enhancement */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="glass-effect px-6 py-2 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 tracking-wider">
              QUEM SOMOS
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
            Sobre a{' '}
            <span className="text-gradient-premium">ISI & Serviços</span>
          </h2>
          
          <div className="relative mx-auto mb-12">
            <div className="w-32 h-1 bg-gradient-hero mx-auto"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto mt-2"></div>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-gradient-card-premium rounded-3xl p-8 shadow-premium">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <span className="text-gradient-isi">Empresa 100% Moçambicana</span>
                </h3>
                <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed">
                    A <strong className="text-primary-600 dark:text-primary-400">ISI & Serviços, LDA</strong> é uma empresa 100% moçambicana, 
                    registada na Conservatória sob o número <strong>100525925</strong>, com NUIT <strong>400551499</strong>.
                  </p>
                  <p className="leading-relaxed">
                    Especializada no desenvolvimento de soluções avançadas e serviços profissionalizados em 
                    Tecnologias de Informação, trabalhamos em parceria com entidades estratégicas.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-card-premium rounded-3xl p-8 shadow-premium">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <span className="text-gradient-premium">Nossa Localização</span>
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Sede Principal</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Rua Kamba Simango<br />
                      Bairro Sommerchield, Maputo<br />
                      Moçambique
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-card-premium rounded-3xl p-8 shadow-premium">
                  <h3 className="text-3xl font-bold text-gradient-premium mb-6">Nossa Missão</h3>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Oferecer soluções integradas de qualidade em tecnologia da informação, 
                    serigrafia, imobiliária e limpeza, contribuindo para o desenvolvimento 
                    do mercado moçambicano através da inovação e excelência.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-card-premium rounded-2xl p-6 shadow-premium text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-bold text-gradient-isi mb-2">Visão</h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Ser referência nacional em soluções integradas
                  </p>
                </div>
                <div className="bg-gradient-card-premium rounded-2xl p-6 shadow-premium text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-gradient-premium mb-2">Valores</h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Inovação, qualidade e compromisso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competências */}
        <div className="relative z-10 mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Nossas <span className="text-gradient-isi">Competências</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Concepção e implementação de projectos', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
              { title: 'Outsourcing de serviços de TI', icon: '🤝', color: 'from-green-500 to-emerald-500' },
              { title: 'Edição de programas informáticos', icon: '💻', color: 'from-purple-500 to-pink-500' },
              { title: 'Programação informática avançada', icon: '⚡', color: 'from-orange-500 to-red-500' },
              { title: 'Consultoria especializada em TI', icon: '🎯', color: 'from-indigo-500 to-blue-500' },
              { title: 'Reparação de computadores e periféricos', icon: '🔧', color: 'from-teal-500 to-cyan-500' },
            ].map((competencia, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-card-premium rounded-3xl p-8 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-2 transition-all duration-500">
                    <div className={`w-16 h-16 bg-gradient-to-br ${competencia.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {competencia.icon}
                    </div>
                    <h4 className="font-bold text-lg text-neutral-900 dark:text-white text-center group-hover:text-gradient-isi transition-all duration-300">
                      {competencia.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valores Empresariais */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Nossos <span className="text-gradient-premium">Valores</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-card-premium rounded-3xl p-8 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-3 transition-all duration-500 text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gradient-premium mb-4 group-hover:text-gradient-isi transition-all duration-300">
                      {value.title}
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};