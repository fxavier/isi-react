import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const BusinessLines: React.FC = () => {
  const businessLines = [
    {
      title: 'Informática',
      description: 'Soluções completas em tecnologia da informação, desde consultoria até implementação de sistemas complexos.',
      icon: '💻',
      color: 'from-primary-500 to-primary-600',
      features: ['Desenvolvimento de Software', 'Consultoria em TI', 'Suporte Técnico', 'Infraestrutura'],
    },
    {
      title: 'Serigrafia',
      description: 'Serviços profissionais de impressão e serigrafia para marketing, branding e comunicação visual.',
      icon: '🎨',
      color: 'from-secondary-500 to-secondary-600',
      features: ['Impressão Digital', 'Serigrafia Tradicional', 'Design Gráfico', 'Material Promocional'],
    },
    {
      title: 'Imobiliária',
      description: 'Consultoria e serviços imobiliários especializados para o mercado moçambicano.',
      icon: '🏢',
      color: 'from-accent-500 to-accent-600',
      features: ['Consultoria Imobiliária', 'Gestão de Propriedades', 'Avaliações', 'Intermediação'],
    },
    {
      title: 'Limpeza',
      description: 'Serviços profissionais de limpeza e manutenção para empresas e edifícios comerciais.',
      icon: '✨',
      color: 'from-emerald-500 to-emerald-600',
      features: ['Limpeza Comercial', 'Manutenção Predial', 'Limpeza Especializada', 'Gestão de Facilities'],
    },
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="business-lines" background="gradient">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          Nossas{' '}
          <span className="text-gradient-isi">Linhas de Negócio</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-neutral-700 dark:text-neutral-300">
          Oferecemos serviços integrados em quatro áreas estratégicas, 
          proporcionando soluções completas para empresas e instituições em Moçambique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {businessLines.map((line, index) => (
          <Card key={index} variant="gradient" className="group">
            <div className="relative overflow-hidden">
              {/* Header with icon and title */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${line.color} rounded-xl flex items-center justify-center text-3xl mr-4 shadow-lg`}>
                  {line.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {line.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {line.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                  Serviços incluídos:
                </h4>
                <ul className="space-y-2">
                  {line.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${line.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                onClick={scrollToContacts}
                className="w-full mt-auto group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500"
              >
                Fale Connosco
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Soluções Integradas para o Seu Negócio
          </h3>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            Combinamos expertise em múltiplas áreas para oferecer soluções completas e eficientes. 
            Descubra como podemos ajudar a transformar o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={scrollToContacts} size="lg">
              Solicitar Proposta
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
            >
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};