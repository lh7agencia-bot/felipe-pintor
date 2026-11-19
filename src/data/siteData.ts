export type GalleryCategory = 'Todos' | 'Interiores' | 'Fachadas' | 'Acabamentos' | 'Comercial';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, 'Todos'>;
  description: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'Felipe Lopes Pintor',
  slogan: 'Seu espaço em nova cor',
  niche: 'Pintor',
  phoneDisplay: '(11) 94747-2483',
  whatsappDigits: '5511947472483',
  whatsappBaseUrl: 'https://wa.me/5511947472483',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Pintura Residencial Interna',
    description:
      'Renovação completa de salas, quartos, cozinhas e corredores com tintas acrílicas, foscas ou acetinadas de alta lavabilidade e proteção total do mobiliário.',
    highlights: ['Recorte preciso em rodapés e sancas', 'Proteção integral de pisos e móveis'],
  },
  {
    number: '02.',
    title: 'Pintura Comercial e Consultórios',
    description:
      'Execução ágil e organizada para escritórios, lojas e clínicas, com tintas sem cheiro de secagem rápida e cronograma planejado para reduzir interrupções.',
    highlights: ['Tintas de baixo odor e secagem rápida', 'Planejamento por etapas de entrega'],
  },
  {
    number: '03.',
    title: 'Preparo, Massa Corrida e Nivelamento',
    description:
      'Correção de fissuras, lixamento técnico com controle de poeira, aplicação de fundo preparador e emassamento liso para garantir aderência e durabilidade.',
    highlights: ['Nivelamento uniforme antes da cor', 'Tratamento de trincas e umidade leve'],
  },
  {
    number: '04.',
    title: 'Fachadas e Efeitos Decorativos',
    description:
      'Pintura externa com revestimentos resistentes ao sol e à chuva, além de acabamentos contemporâneos como cimento queimado, texturas e paredes de destaque.',
    highlights: ['Tintas elastoméricas para áreas externas', 'Acabamento em cimento queimado e acetinado'],
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Interiores',
  'Fachadas',
  'Acabamentos',
  'Comercial',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'sala-contraste-marinho',
    src: '/images/hero-pintura-sala.jpg',
    alt: 'Sala de estar ampla recém-pintada com parede destaque em azul marinho e paredes brancas',
    title: 'Sala de Estar em Contraste Marinho',
    category: 'Interiores',
    description:
      'Pintura interna completa com parede principal em azul marinho fosco e acabamento branco neve lavável nas demais superfícies.',
  },
  {
    id: 'suite-azul-marinho',
    src: '/images/galeria-parede-marinho.jpg',
    alt: 'Quarto moderno com parede pintada em azul marinho fosco e molduras brancas alinhadas',
    title: 'Suíte Principal Azul Marinho Fosco',
    category: 'Interiores',
    description:
      'Aplicação de tinta acrílica premium fosca com recorte limpo entre a parede escura e a sanca de gesso branca.',
  },
  {
    id: 'fachada-residencial',
    src: '/images/galeria-fachada-residencial.jpg',
    alt: 'Fachada residencial moderna pintada em branco off-white com detalhes em azul acinzentado',
    title: 'Fachada Residencial com Proteção Solar',
    category: 'Fachadas',
    description:
      'Preparação de alvenaria externa e pintura com tinta impermeabilizante resistente às variações climáticas.',
  },
  {
    id: 'acabamento-rolo-precisao',
    src: '/images/galeria-acabamento-massa.jpg',
    alt: 'Pintor profissional aplicando tinta com rolo sobre parede preparada e protegida com fita azul',
    title: 'Nivelamento e Recorte com Fita de Precisão',
    category: 'Acabamentos',
    description:
      'Mascaramento completo de esquadrias de madeira e aplicação uniforme em demãos cruzadas para cobertura perfeita.',
  },
  {
    id: 'sala-jantar-cimento',
    src: '/images/galeria-efeito-cimento.jpg',
    alt: 'Sala de jantar com parede decorativa em efeito cimento queimado em tons azulados',
    title: 'Sala de Jantar em Cimento Queimado Oceânico',
    category: 'Acabamentos',
    description:
      'Efeito decorativo espatulado com nuances azuladas e selador acetinado para realce sob iluminação indireta.',
  },
  {
    id: 'espaco-comercial-azul',
    src: '/images/galeria-escritorio-comercial.jpg',
    alt: 'Escritório amplo pintado em branco e azul marinho com acabamento limpo e iluminação natural',
    title: 'Escritório em Branco Gelo e Marinho',
    category: 'Comercial',
    description:
      'Renovação de ambiente de trabalho com tinta acrílica sem cheiro e painel de destaque em azul marinho.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depoimento-mariana',
    name: 'Mariana Albuquerque',
    service: 'Pintura Residencial Interna',
    rating: 5,
    text: 'O Felipe transformou a nossa sala e os quartos em poucos dias. Protegeu todos os móveis com muito cuidado, não deixou respingos no piso e o recorte da parede azul marinho ficou perfeito.',
  },
  {
    id: 'depoimento-carlos',
    name: 'Carlos Eduardo Mendes',
    service: 'Massa Corrida e Fachada',
    rating: 5,
    text: 'Pontualidade e capricho do início ao fim. Precisávamos corrigir várias marcas antigas nas paredes antes de pintar a fachada e o resultado superou o que imaginávamos.',
  },
  {
    id: 'depoimento-fernanda',
    name: 'Fernanda Vasconcelos',
    service: 'Efeito Decorativo e Acabamento',
    rating: 5,
    text: 'Contratei para fazer uma parede em cimento queimado e a pintura completa do apartamento. Atendimento transparente no orçamento, orientou sobre as melhores tintas e entregou tudo limpo.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-orcamento',
    question: 'Como funciona a solicitação de orçamento?',
    answer:
      'Você pode enviar uma mensagem pelo formulário do site ou diretamente pelo WhatsApp (11) 94747-2483 informando a quantidade de cômodos, metragem aproximada e o tipo de serviço desejado. A partir dessas informações, combinamos os detalhes para passar uma estimativa clara e sem compromisso.',
  },
  {
    id: 'faq-protecao',
    question: 'Os móveis, pisos e tomadas são protegidos antes da pintura?',
    answer:
      'Sim. Antes de abrir qualquer lata de tinta, realizamos o isolamento completo do ambiente com lonas plásticas, papelão protetor no piso, cobertura de móveis e aplicação de fita crepe de precisão em rodapés, batentes, janelas e espelhos de tomada.',
  },
  {
    id: 'faq-tintas',
    question: 'Qual acabamento de tinta é mais indicado para cada ambiente?',
    answer:
      'Para salas e quartos, a tinta acrílica fosca ajuda a disfarçar pequenas ondulações da parede. Em corredores, áreas com crianças ou cozinhas, o acabamento acetinado ou semibrilho facilita a limpeza diária. Para fachadas, utilizamos tintas acrílicas ou elastoméricas próprias para sol e chuva.',
  },
  {
    id: 'faq-prazo',
    question: 'Qual é o prazo médio para execução de uma pintura?',
    answer:
      'Um quarto ou parede de destaque costuma ser concluído em 1 a 2 dias. Apartamentos ou residências completas variam conforme a necessidade de aplicação de massa corrida, lixamento e número de demãos, geralmente entre 3 e 7 dias úteis.',
  },
  {
    id: 'faq-limpeza',
    question: 'O local é entregue limpo após a conclusão do serviço?',
    answer:
      'Sim. Ao finalizar as demãos e a conferência de acabamento sob luz natural e artificial, retiramos todas as fitas de proteção, recolhemos lonas e resíduos da obra e deixamos o ambiente organizado para uso imediato.',
  },
];
