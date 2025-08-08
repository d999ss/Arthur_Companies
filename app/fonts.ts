import localFont from 'next/font/local';

// Example: If we later want to expose CSS variables via next/font, we can define them here.
// Not used currently because we rely on CSS variables set in app/globals.css.

export const unused = localFont({
  src: '../public/itc-garamond-std.otf',
  display: 'swap',
  variable: '--font-itc-garamond',
});
