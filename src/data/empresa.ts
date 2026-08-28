/**
 * Fonte única de verdade do conteúdo do site.
 * Itens marcados com CONFERIR precisam ser confirmados com a empresa.
 */

export interface Acabamento {
  id: string;
  nome: string;
  /** Caminho da imagem em /public */
  imagem: string;
  /** Cor aproximada para o chip, em hex */
  chip: string;
  /** Marca como lançamento recente */
  novidade?: boolean;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  acabamentos: readonly Acabamento[];
}

export interface Publico {
  titulo: string;
  descricao: string;
}

export interface Diferencial {
  titulo: string;
  descricao: string;
}

export interface Empresa {
  nome: string;
  nomeCurto: string;
  descricaoBreve: string;
  chamada: string;
  subChamada: string;
  cnpj: string;
  endereco: {
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
  };
  telefone: { exibicao: string; e164: string };
  /** Deixe undefined se o número não tiver WhatsApp. */
  whatsapp?: { exibicao: string; e164: string; mensagem: string };
  email?: string;
  instagram?: string;
  horario: string;
  produtos: readonly Produto[];
  publicos: readonly Publico[];
  diferenciais: readonly Diferencial[];
}

export const empresa: Empresa = {
  nome: 'Vetralumi Componentes',
  nomeCurto: 'Vetralumi',
  descricaoBreve: 'Componentes para esquadrias de alumínio em Concórdia, Santa Catarina.',

  chamada: 'Componentes para esquadrias de alumínio.',
  subChamada:
    'Dobradiças com marca própria, em três acabamentos. Atendimento direto em Concórdia — SC.',

  cnpj: '63.676.854/0001-02',

  endereco: {
    logradouro: 'Rua Getúlio Vargas',
    numero: '', // CONFERIR: o número não aparece no Google
    bairro: 'Centro',
    cidade: 'Concórdia',
    uf: 'SC',
    cep: '89700-017',
  },

  telefone: { exibicao: '(49) 99803-6954', e164: '+5549998036954' },

  // CONFERIR: confirmar se o número tem WhatsApp. Se não tiver, remova este bloco.
  whatsapp: {
    exibicao: '(49) 99803-6954',
    e164: '+5549998036954',
    mensagem: 'Olá! Gostaria de falar sobre componentes para esquadrias.',
  },

  email: undefined, // CONFERIR
  instagram: undefined, // CONFERIR

  horario: 'Segunda a sexta, das 7h30 às 17h',

  // CONFERIR: incluir as demais linhas (fechos, puxadores, roldanas, borrachas, escovas, trilhos...)
  produtos: [
    {
      id: 'dobradicas',
      nome: 'Dobradiças',
      descricao:
        'Dobradiça para esquadria de alumínio, disponível em três acabamentos. Furação padrão e pino reforçado.', // CONFERIR: especificação técnica
      acabamentos: [
        {
          id: 'preta',
          nome: 'Preta',
          imagem: '/produtos/dobradica-preta.png',
          chip: '#1A1A1A',
        },
        {
          id: 'cromada',
          nome: 'Cromada',
          imagem: '/produtos/dobradica-cromada.png',
          chip: '#B9BEC4',
        },
        {
          id: 'branca',
          nome: 'Branca',
          imagem: '/produtos/dobradica-branca.png',
          chip: '#F2F2F2',
          novidade: true,
        },
      ],
    },
  ],

  // CONFERIR: confirmar se atendem consumidor final além de serralheria e vidraçaria
  publicos: [
    {
      titulo: 'Serralherias',
      descricao:
        'Componentes de reposição e produção, com acabamento uniforme entre lotes para não variar o padrão da obra.',
    },
    {
      titulo: 'Vidraçarias',
      descricao:
        'Peças para portas e janelas de alumínio, nos acabamentos que acompanham os perfis mais usados.',
    },
    {
      titulo: 'Instaladores',
      descricao:
        'Atendimento direto no balcão, em Concórdia, para quem precisa resolver a peça no mesmo dia.',
    },
  ],

  // CONFERIR: estes três precisam ser validados com a empresa antes de publicar
  diferenciais: [
    {
      titulo: 'Marca própria',
      descricao:
        'As peças saem identificadas com a marca Vetralumi, o que facilita repor a mesma referência depois.',
    },
    {
      titulo: 'Três acabamentos',
      descricao:
        'Preta, cromada e branca — esta última recém-incorporada à linha, para esquadria branca.',
    },
    {
      titulo: 'Atendimento no balcão',
      descricao:
        'Loja no Centro de Concórdia, de segunda a sexta, para retirada e para tirar dúvida de aplicação.',
    },
  ],
} as const;

export const enderecoCompleto = (e: Empresa['endereco']): string =>
  `${e.logradouro}${e.numero ? `, ${e.numero}` : ''} — ${e.bairro}, ${e.cidade} — ${e.uf}`;

export const linkMapa = (e: Empresa['endereco']): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Vetralumi Componentes, ${e.logradouro}, ${e.cidade} - ${e.uf}`,
  )}`;

export const linkWhatsapp = (w: NonNullable<Empresa['whatsapp']>): string =>
  `https://wa.me/${w.e164.replace('+', '')}?text=${encodeURIComponent(w.mensagem)}`;
