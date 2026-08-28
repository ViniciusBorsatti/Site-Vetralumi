import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vetralumi.com.br',
  integrations: [sitemap()],
});
