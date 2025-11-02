import React from 'react';
import { Section } from '../components/Section';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Migração para Microsoft 365',
      description: 'Migramos sua infraestrutura para a nuvem Microsoft 365/Office 365 com segurança e eficiência.',
      icon: '☁️',
      features: ['Setup completo', 'Migração de dados', 'Treinamento de usuários', 'Suporte técnico'],
    },
    {
      title: 'Fornecimento de Equipamentos',
      description: 'Fornecemos equipamentos de TI de alta qualidade para empresas e instituições.',
      icon: '💻',
      features: ['Hardware certificado', 'Garantia estendida', 'Instalação incluída', 'Suporte técnico'],
    },
    {
      title: 'Soluções à Medida',
      description: 'Desenvolvemos software personalizado para atender às necessidades específicas do seu negócio.',
      icon: '⚙️',
      features: ['Análise de requisitos', 'Desenvolvimento personalizado', 'Testes rigorosos', 'Manutenção contínua'],
    },
    {
      title: 'Segurança & CCTV',
      description: 'Sistemas de segurança eletrônica e videovigilância para proteger seus assets.',
      icon: '🔒',
      features: ['Câmeras HD/4K', 'Monitoramento 24/7', 'Acesso remoto', 'Backup seguro'],
    },
    {
      title: 'Gestão Documental',
      description: 'Digitalização e gestão inteligente de documentos para otimizar seus processos.',
      icon: '📄',
      features: ['Digitalização profissional', 'OCR avançado', 'Indexação automática', 'Backup seguro'],
    },
  ];

  return (
    <Section id="services" className="relative bg-white dark:bg-neutral-900">
      {/* Background Enhancement */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="glass-effect px-6 py-2 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 tracking-wider">
              TECNOLOGIA DA INFORMAÇÃO
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
            Nossos{' '}
            <span className="text-gradient-isi">Serviços de TI</span>
          </h2>
          
          <div className="relative mx-auto mb-12">
            <div className="w-32 h-1 bg-gradient-hero mx-auto"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto mt-2"></div>
          </div>
          
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Oferecemos <span className="font-semibold text-gradient-premium">soluções completas</span> em tecnologia da informação, 
            desde consultoria até implementação e <span className="font-semibold">suporte técnico especializado</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative h-full bg-gradient-card-premium rounded-3xl p-8 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-3 transition-all duration-500 flex flex-col">
                  <div className="text-center mb-8">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div className="relative w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-gradient-isi transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="bg-white/50 dark:bg-neutral-800/50 rounded-2xl p-6 backdrop-blur-sm">
                      <h4 className="font-bold text-gradient-premium mb-4 text-center">
                        Incluído no Serviço:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-300">
                            <div className="w-5 h-5 bg-gradient-hero rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative bg-gradient-hero rounded-3xl p-12 text-white text-center shadow-premium">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto backdrop-blur-lg border border-white/30">
                  🚀
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de uma <span className="text-gradient-isi">solução personalizada?</span>
              </h3>
              
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para desenvolver a 
                <span className="font-semibold"> solução perfeita</span> para o seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contacts');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-white text-primary-600 hover:text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-500 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Solicitar Consultoria
                  </span>
                </button>
                
                <button
                  onClick={() => {
                    const element = document.getElementById('business-lines');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group glass-effect hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-500 border-2 border-white/30 hover:border-white/50 transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Ver Todas as Áreas
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
};