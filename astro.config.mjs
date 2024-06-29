import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import { expressiveCodeOptions } from './src/site-config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jimmyt.dev',
  integrations: [
    expressiveCode(expressiveCodeOptions),
    tailwind({
      applyBaseStyles: false
    }),
    icon()
  ]
})
