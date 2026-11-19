import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/contact';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-white">{BUSINESS_INFO.name}</p>
            <p className="mt-1 text-sm text-[#1D9BF0]">{BUSINESS_INFO.slogan}</p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#servicos" className="transition-colors hover:text-white">
              Serviços
            </a>
            <a href="#galeria" className="transition-colors hover:text-white">
              Galeria
            </a>
            <a href="#depoimentos" className="transition-colors hover:text-white">
              Depoimentos
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              Dúvidas
            </a>
            <a href="#contato" className="transition-colors hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href={buildWhatsAppUrl(BUSINESS_INFO.whatsappDigits)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white tabular-nums transition-colors hover:text-[#1D9BF0]"
          >
            <Phone className="h-4 w-4 text-[#1D9BF0]" aria-hidden="true" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>
            © <span className="tabular-nums">{year}</span> {BUSINESS_INFO.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
