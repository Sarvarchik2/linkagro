// nuxt.config.ts
export default defineNuxtConfig({
  srcDir: 'app/',
  // Исправляет предупреждение (WARN)
  compatibilityDate: '2024-11-29',

  devtools: { enabled: true },

  // css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      // Resolve TypeScript path aliases (e.g., '@/assets')
      // ViteTsConfigPaths()
    ]
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'LINKAGRO - Современные технологии',
      meta: [
        { name: 'description', content: 'Анализируйте почву, повышайте урожайность и получайте финансирование.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
},

  nitro: {
  output: {
    publicDir: 'dist'
  }
}
})