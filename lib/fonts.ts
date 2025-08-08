import localFont from 'next/font/local'

// ITC Garamond for all headings - Display, Headline, Title
export const garamond = localFont({
  src: '../public/itc-garamond-std.otf',
  variable: '--font-garamond',
  weight: '400 500 600',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// Styrene A - Currently not used but kept for reference
export const styreneA = localFont({
  src: '../public/__styreneA_403256-normal-500-100.ttf',
  variable: '--font-styrene-a',
  weight: '500',
  display: 'swap',
  preload: false,
})

// Styrene B for all body text
export const styreneB = localFont({
  src: [
    {
      path: '../public/__styreneB_57fc85-normal-400-100.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/__styreneB_57fc85-normal-500-100.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-styrene-b',
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

// Tiempos for serif emphasis and quotes
export const tiempos = localFont({
  src: '../public/Tiempos Text Regular-normal-400-100.ttf',
  variable: '--font-tiempos',
  weight: '400',
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})