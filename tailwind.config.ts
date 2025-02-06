import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',  // para a estrutura app
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',  // para componentes
    './src/**/*.{js,ts,jsx,tsx,mdx}',  // para qualquer arquivo no src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config