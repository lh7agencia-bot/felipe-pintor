import { Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#1D9BF0]">Especialidades em Pintura</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
            Serviços executados com técnica e proteção completa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Cada etapa é planejada para valorizar o imóvel, preservar pisos e móveis e entregar
            paredes niveladas com cores duráveis.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-4">
                  <h3 className="font-display text-xl font-bold text-[#0B3D91]">
                    {service.title}
                  </h3>
                  <span className="font-display text-lg font-bold text-[#1D9BF0] tabular-nums shrink-0">
                    {service.number}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {service.description}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#1D9BF0]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
