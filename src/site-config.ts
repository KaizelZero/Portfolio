import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Jimmy Truong',
  title: 'Jimmy Truong',
  description: 'Jimmy Truong Resume',
  lang: 'en-GB',
  ogLocale: 'en_GB',
  date: {
    locale: 'en-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  }
}

export const resumeData = {
  name: 'Jimmy Truong',
  email: 'truong.jimmy@outlook.com',
  location: 'Denver, CO',
  job_title: 'Technical Support Engineer @ ',
  company: {
    name: 'IQGEO',
    url: 'https://www.iqgeo.com/'
  },
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    frontend: ['React', 'Next.js', 'Svelte', 'Sveltekit', 'Astro', 'TailwindCSS'],
    backend: ['Node.js', 'Express.js'],
    others: ['PostgreSQL', 'Docker', 'Git', 'Linux']
  }
}

export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog/'
  },
  {
    title: 'Tools',
    path: '/tools/'
  },
  {
    title: 'Projects',
    path: '/projects/'
  }
]

export const socialLinks: Array<{ title: string; path: string; icon: string }> = [
  {
    title: 'GitHub',
    path: 'https://github.com/kaizelzero',
    icon: 'social/github'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/truong-jimmy/',
    icon: 'social/linkedin'
  }
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  // One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
  themes: ['dracula', 'github-light'],
  themeCssSelector(theme, { styleVariants }) {
    // If one dark and one light theme are available
    // generate theme CSS selectors compatible with cactus-theme dark mode switch
    if (styleVariants.length >= 2) {
      const baseTheme = styleVariants[0]?.theme
      const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
      if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
    }
    // return default selector
    return `[data-theme="${theme.name}"]`
  },
  useThemedScrollbars: false,
  styleOverrides: {
    frames: {
      frameBoxShadowCssValue: 'none'
    },
    uiLineHeight: 'inherit',
    codeFontSize: '0.875rem',
    codeLineHeight: '1.7142857rem',
    borderRadius: '4px',
    codePaddingInline: '1rem',
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
  }
}
