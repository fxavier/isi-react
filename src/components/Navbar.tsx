import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { DarkModeToggle } from './DarkModeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Clientes', id: 'clients' },
    { label: 'Contactos', id: 'contacts' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.jpg"
              alt="ISI & Serviços - Informática, Serigrafia, Imobiliária & Limpeza"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <DarkModeToggle />
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => scrollToSection('contacts')}
            >
              Pedir Proposta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-neutral-900 dark:text-white' : 'text-neutral-900 dark:text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-500 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2 space-y-2">
                <div className="flex justify-center">
                  <DarkModeToggle />
                </div>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => scrollToSection('contacts')}
                  className="w-full"
                >
                  Pedir Proposta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};