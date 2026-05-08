import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    // Décommente la ligne suivante quand tu déploieras sur GitHub Pages
    // site: 'https://tonusername.github.io',
    // base: '/portfolio',
});
