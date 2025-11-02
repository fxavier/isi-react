import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export const Clients: React.FC = () => {
  const clients = [
    'Ministério do Interior',
    'Igreja do Evangelho Completo de Deus em Moçambique',
    'Centro Infantil e Colégio Roda Viva',
    'Bau Tete',
    'INAC – Instituto Nacional do Audiovisual e Cinema',
    'TATA de Moçambique',
    'Haigest Moçambique',
    'Rabbit Security',
    'Electricidade de Moçambique, EP',
    'Mukoque Construction, Lda',
    'Caetano Drive Moçambique',
    'Platinum Investimentos',
    'Lúcios Construções, Lda',
  ];

  const testimonials = [
    {
      quote: "A ISI & Serviços demonstrou excelência técnica e profissionalismo na implementação dos nossos sistemas de TI.",
      client: "Representante do Setor Público",
      role: "Ministério",
    },
    {
      quote: "Soluções inovadoras e suporte técnico de qualidade. Recomendamos os serviços da ISI para outras empresas.",
      client: "Gestor de TI",
      role: "Setor Privado",
    },
    {
      quote: "Parceria sólida e confiável. A ISI entende as necessidades do mercado moçambicano.",
      client: "Diretor Executivo",
      role: "Empresa Nacional",
    },
  ];

  const stats = [
    { number: '50+', label: 'Clientes Ativos' },
    { number: '100+', label: 'Projetos Concluídos' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '24/7', label: 'Suporte Técnico' },
  ];

  return (
    <Section id="clients" background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          Nossos{' '}
          <span className="text-gradient-isi">Clientes & Parceiros</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-neutral-700 dark:text-neutral-300">
          Trabalhamos com organizações de renome em Moçambique, 
          oferecendo soluções que geram resultados reais e duradouros.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-isi mb-2">
              {stat.number}
            </div>
            <div className="text-neutral-700 dark:text-neutral-300 font-medium">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

      {/* Clients Grid */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-white mb-8">
          Clientes e Referências
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <Card key={index} className="text-center group hover:bg-gradient-card">
              <div className="flex items-center justify-center h-16">
                <h4 className="font-medium text-neutral-900 dark:text-white text-sm md:text-base leading-tight">
                  {client}
                </h4>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-white mb-8">
          O que Dizem Nossos Clientes
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="gradient" className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="text-sm">
                <div className="font-semibold text-neutral-900 dark:text-white">
                  {testimonial.client}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-hero rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Junte-se aos Nossos Clientes Satisfeitos
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Descubra como a ISI & Serviços pode transformar o seu negócio com soluções 
            personalizadas e suporte técnico especializado.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacts');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-primary-600 hover:bg-secondary-50 font-medium rounded-lg px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Solicitar Consultoria Gratuita
          </button>
        </div>
      </div>
    </Section>
  );
};