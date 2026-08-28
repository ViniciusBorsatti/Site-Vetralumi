# Site — Vetralumi Componentes

Site institucional de página única. Estático, sem back-end.

## Stack

- [Astro](https://astro.build) 7 — HTML estático, praticamente zero JavaScript no navegador
- TypeScript em modo `strict`
- CSS com escopo por componente + tokens em `src/styles/global.css`

## Rodando

```bash
npm install
npm run dev      # http://localhost:4321
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | gera o site em `dist/` |
| `npm run preview` | serve o `dist/` |
| `npm run check` | checagem de tipos |

## Onde mexer

**Todo o conteúdo fica em `src/data/empresa.ts`**, tipado. Telefone, endereço, produtos,
acabamentos e textos estão lá. Os pontos com `CONFERIR` precisam ser confirmados com a empresa.

Para adicionar uma linha nova (fechos, puxadores, roldanas), basta acrescentar um objeto ao
array `produtos` — a seção se monta sozinha.

```
src/
├── components/
│   ├── MarcaV.astro          logotipo em SVG, duas lâminas animáveis
│   ├── Cabecalho.astro
│   ├── Capa.astro            primeira dobra
│   ├── Produtos.astro
│   ├── ParaQuem.astro
│   ├── Diferenciais.astro
│   ├── Contato.astro
│   ├── Rodape.astro
│   └── BotaoFlutuante.astro  WhatsApp fixo
├── data/empresa.ts           ← conteúdo do site
├── layouts/Base.astro        <head>, SEO, JSON-LD
├── styles/global.css         tokens
└── pages/index.astro
```

## Antes de publicar

1. Trocar `site:` no `astro.config.mjs` pelo domínio real (hoje: `vetralumi.com.br`).
2. Atualizar a mesma URL em `public/robots.txt`.
3. Resolver os `CONFERIR` em `src/data/empresa.ts`.
4. Substituir as imagens de `public/produtos/` por fotos em alta resolução.

## Sobre as imagens

As fotos atuais foram recortadas de material de divulgação em baixa resolução
(90–340 px de largura). Servem para prototipar, mas precisam ser trocadas por
originais antes de publicar.
