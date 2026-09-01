/**
 * Fonte única de verdade do conteúdo do site.
 * Itens marcados com CONFERIR ainda precisam ser confirmados com a empresa.
 */

export interface Acabamento {
  id: string;
  nome: string;
  imagem: string;
  chip: string;
  novidade?: boolean;
}

export interface Especificacao {
  rotulo: string;
  valor: string;
}

export interface Produto {
  id: string;
  nome: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  lancamento?: boolean;
  especificacoes: readonly Especificacao[];
  acabamentos?: readonly Acabamento[];
}

export interface Aplicacao {
  titulo: string;
  descricao: string;
}

export interface Empresa {
  nome: string;
  nomeCurto: string;
  slogan: string;
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
  whatsapp?: { exibicao: string; e164: string; mensagem: string };
  email?: string;
  instagram?: string;
  mercadoLivre?: string;
  horario: string;
  rede: {
    distribuidores: number;
    estados: readonly string[];
    texto: string;
  };
  produtos: readonly Produto[];
  aplicacoes: readonly Aplicacao[];
}

export const empresa: Empresa = {
  nome: 'Vetralumi Componentes',
  nomeCurto: 'Vetralumi',
  slogan: 'Pequenos detalhes, grandes resultados',
  descricaoBreve:
    'Componentes para esquadrias com rede de distribuidores em seis estados. Base em Concórdia, Santa Catarina.',

  chamada: 'Componentes que resolvem o detalhe.',
  subChamada:
    'Dobradiça com mola em aço inoxidável e roldana com rolamento, com marca própria e distribuição em seis estados.',

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

  whatsapp: {
    exibicao: '(49) 99803-6954',
    e164: '+5549998036954',
    mensagem: 'Olá! Gostaria de falar sobre os componentes Vetralumi.',
  },

  email: undefined, // CONFERIR
  instagram: undefined, // CONFERIR
  // CONFERIR: este é o link de UM ANÚNCIO, não da loja. Trocar pelo link da
  // loja quando o cliente confirmar — se o anúncio sair do ar, o botão quebra.
  mercadoLivre: 'https://produto.mercadolivre.com.br/MLB-4683783809',

  horario: 'Segunda a sexta, das 7h30 às 17h',

  rede: {
    distribuidores: 12,
    estados: ['SP', 'PR', 'SC', 'RJ', 'ES', 'MT'],
    texto:
      'A distribuição é feita por parceiros regionais. Quem revende componentes para esquadrias e quer trabalhar com a linha Vetralumi fala direto com a empresa.',
  },

  produtos: [
    {
      id: 'dobradica-mola',
      nome: 'Dobradiça com mola',
      subtitulo: 'Fechamento automático',
      descricao:
        'Indicada para portas de lixeira, cercados de piscina, telas mosquiteiras e qualquer aplicação que exija fechamento automático. Vendida em par, com parafusos e chave allen.',
      imagem: '/produtos/dobradica-cromada.png',
      especificacoes: [
        { rotulo: 'Material', valor: 'Aço inoxidável' },
        { rotulo: 'Abertura', valor: '180°' },
        { rotulo: 'Regulagem', valor: '3 níveis' },
        { rotulo: 'Capacidade', valor: 'O par fecha portas de até 80 kg' },
        { rotulo: 'Dimensões', valor: '75 × 71 × 14 mm' },
        { rotulo: 'Pino', valor: '55 mm' },
      ],
      acabamentos: [
        { id: 'preta', nome: 'Preta', imagem: '/produtos/dobradica-preta.png', chip: '#1A1A1A' },
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
    {
      id: 'rol-440',
      nome: 'Rol 440',
      subtitulo: 'Roldana com rolamento',
      descricao:
        'Roldana com rolamento e regulagem de altura, para portas e janelas de correr.', // CONFERIR: aplicação exata
      imagem: '/produtos/rol440.png',
      lancamento: true,
      especificacoes: [
        { rotulo: 'Comprimento', valor: '7 cm' },
        { rotulo: 'Altura', valor: '2 cm' },
        { rotulo: 'Rolamento', valor: 'Sim' },
        { rotulo: 'Regulagem', valor: 'Sim' },
      ],
    },
  ],

  aplicacoes: [
    {
      titulo: 'Portas de lixeira',
      descricao: 'Fecham sozinhas depois do uso, sem depender de quem passou por último.',
    },
    {
      titulo: 'Cercados de piscina',
      descricao: 'O fechamento automático é o que mantém o portão fechado entre um banho e outro.',
    },
    {
      titulo: 'Telas mosquiteiras',
      descricao: 'Mantêm a tela encostada sem precisar de fechadura ou trinco.',
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
