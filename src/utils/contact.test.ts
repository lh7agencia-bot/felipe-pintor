import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  formatContactMessage,
  validateContactForm,
} from './contact';

test('validateContactForm rejects empty or invalid inputs', () => {
  const result = validateContactForm({
    name: 'A',
    email: 'email-invalido',
    message: 'Oi',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid Brazilian contact payload', () => {
  const result = validateContactForm({
    name: 'Mariana Souza',
    email: 'mariana@exemplo.com.br',
    message: 'Gostaria de orçamento para pintura de sala e dois quartos.',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('buildWhatsAppUrl encodes phone and message properly', () => {
  const url = buildWhatsAppUrl('5511947472483', {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    message: 'Preciso pintar a fachada da minha casa.',
  });

  assert.ok(url.startsWith('https://wa.me/5511947472483?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /João Silva/);
  assert.match(decoded, /joao@exemplo\.com/);
  assert.match(decoded, /Preciso pintar a fachada/);
});

test('buildMailtoUrl encodes subject and body properly', () => {
  const mailto = buildMailtoUrl({
    name: 'Paula Lima',
    email: 'paula@exemplo.com',
    message: 'Orçamento para massa corrida e pintura acetinada.',
  });

  assert.ok(mailto.startsWith('mailto:?subject='));
  assert.match(mailto, /Paula%20Lima/);
  assert.match(mailto, /body=/);
});

test('formatContactMessage trims whitespace from all fields', () => {
  const formatted = formatContactMessage({
    name: '  Lucas Rocha  ',
    email: '  lucas@exemplo.com ',
    message: '  Pintura de apartamento de 70m2.  ',
  });

  assert.match(formatted, /Nome: Lucas Rocha\n/);
  assert.match(formatted, /E-mail: lucas@exemplo\.com\n/);
  assert.match(formatted, /Mensagem: Pintura de apartamento de 70m2\.$/);
});
