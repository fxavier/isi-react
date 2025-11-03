import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Clientes', id: 'clients' },
    { label: 'Contactos', id: 'contacts' },
  ];

  const services = [
    'Migração Microsoft 365',
    'Soluções à Medida',
    'Segurança & CCTV',
    'Gestão Documental',
    'Consultoria em TI',
  ];

  const businessLines = [
    'Informática',
    'Serigrafia',
    'Imobiliária',
    'Limpeza',
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <img
                src="/logo.png"
                alt="ISI & Serviços - Informática, Serigrafia, Imobiliária & Limpeza"
                className="h-20 md:h-24 w-auto object-contain mb-4"
                loading="lazy"
              />
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Empresa 100% moçambicana especializada em soluções integradas de tecnologia, 
              serigrafia, imobiliária e limpeza.
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>Conservatória: 100525925</p>
              <p>NUIT: 400551499</p>
              <p>Maputo, Moçambique</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços de TI</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Lines & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Linhas de Negócio</h3>
            <ul className="space-y-2 mb-6">
              {businessLines.map((line) => (
                <li key={line}>
                  <span className="text-neutral-300 text-sm">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a 
                  href="mailto:comercialisiservicos@gmail.com"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  comercialisiservicos@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a 
                  href="tel:+258824177610"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  +258 82 417 7610
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-neutral-300 text-sm">
                  Rua Kamba Simango, Sommerchield
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} ISI & Serviços, LDA. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Soluções integradas com qualidade moçambicana.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
              >
                Política de Privacidade
              </button>
              <button
                onClick={scrollToTop}
                className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Voltar ao topo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Director Info */}
      <div className="bg-neutral-800 border-t border-neutral-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-neutral-400 text-sm">
            <p>
              <span className="font-medium text-neutral-300">Manuel Filipe Guiliche</span> - Diretor Geral
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};