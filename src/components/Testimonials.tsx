import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#0B3D91] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#1D9BF0]">Avaliações de Clientes</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
            Quem renovou o espaço recomenda o capricho
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            Relatos reais sobre pontualidade, cuidado com o ambiente e acabamento final nas obras
            entregues.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col justify-between rounded-xl border border-white/15 bg-[#072A66] p-6 sm:p-7"
            >
              <div>
                <div
                  className="flex items-center gap-1"
                  aria-label={`Avaliação ${testimonial.rating} de 5 estrelas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-slate-100 sm:text-base">
                  “{testimonial.text}”
                </blockquote>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-base font-bold text-white">{testimonial.name}</p>
                <p className="mt-0.5 text-xs font-medium text-[#1D9BF0]">{testimonial.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
