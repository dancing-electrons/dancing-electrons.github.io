import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dancing-electrons.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
