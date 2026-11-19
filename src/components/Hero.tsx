import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/contact';
import { ResilientImage } from './ResilientImage';

const HERO_PILLARS = [
  {
    index: '01',
    title: 'Preparação Rigorosa',
    detail: 'Proteção de pisos e móveis, correção de imperfeições e lixamento técnico antes da tinta.',
  },
  {
    index: '02',
    title: 'Acabamento de Precisão',
    detail: 'Recortes limpos em rodapés, portas e tetos com tintas de primeira linha.',
  },
  {
    index: '03',
    title: 'Atendimento Direto',
    detail: 'Orçamento transparente e acompanhamento direto pelo WhatsApp sem intermediários.',
  },
] as const;

export function Hero() {
  const whatsappHref = buildWhatsAppUrl(BUSINESS_INFO.whatsappDigits);

  return (
    <section id="inicio" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#1D9BF0]" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-wide text-[#0B3D91]">
                Pintura Residencial e Comercial
              </p>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] [text-wrap:balance]">
              {BUSINESS_INFO.slogan}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {BUSINESS_INFO.name} executa pinturas internas, fachadas, nivelamento com massa corrida
              e efeitos decorativos com limpeza, pontualidade e acabamento uniforme em cada parede.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contato"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1D9BF0] px-6 py-3 text-sm font-bold text-[#06204A] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0B3D91] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D91]"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#0B3D91]/25 bg-white px-5 py-3 text-sm font-semibold text-[#0B3D91] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <Phone className="h-4 w-4 text-[#1D9BF0]" aria-hidden="true" />
                <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:min-h-[360px] lg:min-h-[430px]">
              <ResilientImage
                src="/images/hero-pintura-sala.jpg"
                alt="Sala de estar iluminada pintada em branco e azul marinho com acabamento impecável"
                title={BUSINESS_INFO.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3 lg:mt-16">
          {HERO_PILLARS.map((pillar) => (
            <div key={pillar.index} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                <span className="font-display text-xs font-bold text-[#1D9BF0] tabular-nums">
                  {pillar.index}
                </span>
                <h2 className="font-display text-base font-bold text-slate-900">
                  {pillar.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
