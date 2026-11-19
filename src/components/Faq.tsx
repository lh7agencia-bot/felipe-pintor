import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="border-t border-slate-200 bg-slate-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#1D9BF0]">Dúvidas Frequentes</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
            Perguntas comuns antes de pintar
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            Esclareça os principais detalhes sobre orçamento, proteção dos móveis, tintas e prazos.
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50/80 sm:px-6 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1D9BF0]"
                  >
                    <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-[#0B3D91] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#1D9BF0]' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div id={panelId} className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
