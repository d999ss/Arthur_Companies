import localFont from 'next/font/local';

// Load ITC Garamond Std font locally
export const itcGaramond = localFont({
  src: './fonts/itc-garamond-std.otf',
  display: 'swap',
  variable: '--font-itc-garamond',
});

// Define other fonts as needed
