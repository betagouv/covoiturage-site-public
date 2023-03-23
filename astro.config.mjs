import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
  server: { port: 4200 }
});