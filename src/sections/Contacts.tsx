import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const departments = [
    {
      title: 'Departamento Comercial',
      email: 'comercial.faster88@gmail.com',
      phone: '+258 83 430 2930',
      icon: '💼',
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'Departamento Técnico',
      email: 'comercialisiservicos@gmail.com',
      phone: '+258 82 417 7610 / 86 407 7710 / 84 518 9397',
      icon: '🔧',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      title: 'Departamento Financeiro',
      email: 'isi.malo@yahoo.com',
      phone: '+258 84/87/82 450 0350',
      icon: '💰',
      color: 'from-accent-500 to-accent-600',
    },
    {
      title: 'Gestão',
      email: 'isi.malo@yahoo.com',
      phone: '+258 84/87/82 450 0350',
      icon: '👥',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contacto via website: ${formData.subject}`;
    const body = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:comercialisiservicos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Section id="contacts" background="gradient">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          Entre em{' '}
          <span className="text-gradient-isi">Contacto</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-neutral-700 dark:text-neutral-300">
          Estamos prontos para ajudar o seu negócio a crescer. 
          Entre em contacto connosco através dos nossos departamentos especializados.
        </p>
      </div>

      {/* Contact Departments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {departments.map((dept, index) => (
          <Card key={index} className="group">
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                {dept.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                  {dept.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-500 transition-colors"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <a 
                      href={`tel:${dept.phone.split(' ')[0]}`}
                      className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-500 transition-colors"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Envie-nos uma Mensagem
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  placeholder="+258 XX XXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Consultoria em TI">Consultoria em TI</option>
                  <option value="Soluções à Medida">Soluções à Medida</option>
                  <option value="Migração Microsoft 365">Migração Microsoft 365</option>
                  <option value="Segurança & CCTV">Segurança & CCTV</option>
                  <option value="Serigrafia">Serigrafia</option>
                  <option value="Imobiliária">Imobiliária</option>
                  <option value="Limpeza">Limpeza</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white resize-vertical"
                placeholder="Descreva o seu projeto ou necessidade..."
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </Card>

        {/* Company Info & Map */}
        <div className="space-y-8">
          <Card>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Informações da Empresa
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">Endereço</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Rua Kamba Simango, Bairro Sommerchield<br />
                    Maputo, Moçambique
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">Representante</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Manuel Filipe Guiliche<br />
                    <span className="text-sm">Diretor Geral</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">Empresa Registada</p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Conservatória: 100525925<br />
                    NUIT: 400551499
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Map */}
          <Card>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Localização
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.634789842845!2d32.58694!3d-25.964744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b3b7e6b7b7b%3A0x1234567890abcdef!2sSommerchield%2C%20Maputo%2C%20Mozambique!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da ISI & Serviços"
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-primary-500 text-white p-4 rounded-lg shadow-lg z-50 fade-in">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Mensagem enviada com sucesso!</span>
          </div>
        </div>
      )}
    </Section>
  );
};