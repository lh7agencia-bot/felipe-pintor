import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  formatContactMessage,
  validateContactForm,
  type ContactChannel,
  type ContactFormValues,
  type ContactValidationErrors,
} from '../utils/contact';

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [channel, setChannel] = useState<ContactChannel>('whatsapp');
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [submittedValues, setSubmittedValues] = useState<ContactFormValues | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFieldChange = (field: keyof ContactFormValues, nextValue: string) => {
    setValues((prev) => ({ ...prev, [field]: nextValue }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(values);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setCopied(false);
    setSubmittedValues({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });
  };

  const handleCopyMessage = async () => {
    if (!submittedValues || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(formatContactMessage(submittedValues));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setSubmittedValues(null);
    setValues(INITIAL_VALUES);
    setErrors({});
    setCopied(false);
  };

  const directWhatsAppUrl = buildWhatsAppUrl(BUSINESS_INFO.whatsappDigits);

  return (
    <section id="contato" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-semibold text-[#1D9BF0]">Contato e Orçamento</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
                Peça seu orçamento sem compromisso
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Preencha os campos ao lado para enviar os detalhes do seu espaço por WhatsApp ou
                e-mail. Se preferir, fale diretamente pelo telefone abaixo.
              </p>

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold tracking-wide text-slate-500">
                  Telefone e WhatsApp
                </p>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-3 font-display text-2xl font-bold text-[#0B3D91] tabular-nums transition-colors hover:text-[#1D9BF0]"
                >
                  <Phone className="h-5 w-5 text-[#1D9BF0]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Para agilizar seu orçamento, informe se a pintura é interna ou externa, a
                  metragem aproximada e se há necessidade de massa corrida.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              {submittedValues ? (
                <div data-testid="contact-confirmation" className="space-y-6">
                  <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-base font-bold">
                        Mensagem validada e pronta para envio
                      </h3>
                      <p className="mt-1 text-sm text-emerald-800">
                        {channel === 'whatsapp'
                          ? 'Clique no botão abaixo para abrir a conversa no WhatsApp com seus dados preenchidos.'
                          : 'Clique no botão abaixo para abrir seu aplicativo de e-mail com a solicitação pronta.'}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-500">Resumo da mensagem</p>
                    <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-800">
                      {formatContactMessage(submittedValues)}
                    </pre>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {channel === 'whatsapp' ? (
                      <a
                        href={buildWhatsAppUrl(BUSINESS_INFO.whatsappDigits, submittedValues)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0B3D91] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#072A66]"
                      >
                        <MessageCircle className="h-4 w-4 text-[#1D9BF0]" aria-hidden="true" />
                        <span>Abrir no WhatsApp</span>
                      </a>
                    ) : (
                      <a
                        href={buildMailtoUrl(submittedValues)}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0B3D91] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#072A66]"
                      >
                        <Mail className="h-4 w-4 text-[#1D9BF0]" aria-hidden="true" />
                        <span>Abrir aplicativo de E-mail</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:bg-slate-50"
                    >
                      <Copy className="h-4 w-4 text-[#1D9BF0]" aria-hidden="true" />
                      <span>{copied ? 'Texto copiado' : 'Copiar texto'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#0B3D91]"
                    >
                      Editar ou enviar outra
                    </button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="block text-sm font-semibold text-slate-900">
                      Canal de envio preferido
                    </span>
                    <div
                      role="group"
                      aria-label="Selecionar canal de envio"
                      className="mt-2 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1"
                    >
                      <button
                        type="button"
                        aria-pressed={channel === 'whatsapp'}
                        onClick={() => setChannel('whatsapp')}
                        className={`flex min-h-[40px] items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-bold transition-colors ${
                          channel === 'whatsapp'
                            ? 'bg-[#1D9BF0] text-[#06204A]'
                            : 'text-slate-600 hover:text-[#0B3D91]'
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        aria-pressed={channel === 'email'}
                        onClick={() => setChannel('email')}
                        className={`flex min-h-[40px] items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-bold transition-colors ${
                          channel === 'email'
                            ? 'bg-[#1D9BF0] text-[#06204A]'
                            : 'text-slate-600 hover:text-[#0B3D91]'
                        }`}
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span>E-mail</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-slate-900"
                    >
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Seu nome completo"
                      value={values.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#1D9BF0] focus:ring-[#1D9BF0]/25'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-slate-900"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="voce@exemplo.com"
                      value={values.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#1D9BF0] focus:ring-[#1D9BF0]/25'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-slate-900"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Descreva os ambientes, metragem aproximada ou tipo de pintura desejada"
                      value={values.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#1D9BF0] focus:ring-[#1D9BF0]/25'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#1D9BF0] px-6 py-3 text-sm font-bold text-[#06204A] transition-colors duration-150 hover:bg-[#0B3D91] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D91]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {channel === 'whatsapp' ? 'Enviar via WhatsApp' : 'Enviar por E-mail'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
