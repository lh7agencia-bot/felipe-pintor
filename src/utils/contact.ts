export type ContactChannel = 'whatsapp' | 'email';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: ContactValidationErrors;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(values: ContactFormValues): ContactValidationResult {
  const errors: ContactValidationErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Informe seu nome completo (mínimo 2 caracteres).';
  }

  if (!trimmedEmail) {
    errors.email = 'Informe seu e-mail para retorno.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Digite um endereço de e-mail válido.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Descreva brevemente o serviço desejado (mínimo 10 caracteres).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatContactMessage(values: ContactFormValues): string {
  const cleanName = values.name.trim();
  const cleanEmail = values.email.trim();
  const cleanMessage = values.message.trim();

  return [
    'Olá, Felipe Lopes Pintor! Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${cleanName}`,
    `E-mail: ${cleanEmail}`,
    `Mensagem: ${cleanMessage}`,
  ].join('\n');
}

export function buildWhatsAppUrl(phoneDigits: string, values?: ContactFormValues): string {
  const cleanDigits = phoneDigits.replace(/\D/g, '');
  if (!values) {
    const defaultText = 'Olá, Felipe Lopes Pintor! Gostaria de solicitar um orçamento.';
    return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(defaultText)}`;
  }
  const text = formatContactMessage(values);
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoUrl(values: ContactFormValues): string {
  const subject = `Orçamento de Pintura — ${values.name.trim()}`;
  const body = formatContactMessage(values);
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
