import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/contact';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(BUSINESS_INFO.whatsappDigits)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com ${BUSINESS_INFO.name} no WhatsApp (${BUSINESS_INFO.phoneDisplay})`}
      className="fixed right-4 bottom-4 z-30 inline-flex h-12 items-center gap-2 rounded-full bg-[#1D9BF0] px-4 text-sm font-bold text-[#06204A] shadow-lg ring-2 ring-[#0B3D91]/30 transition-transform duration-150 hover:scale-105 hover:bg-[#0B3D91] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D91] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
