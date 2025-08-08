# Arthur Companies Design Token System

This document outlines the comprehensive design token system used throughout the Arthur Companies website. All design values are centralized as CSS custom properties for consistency and maintainability.

## 🎨 Color Tokens

### Brand Colors
```css
--color-brand-primary: 45 85% 45%;          /* #E6B800 - Dark golden yellow */
--color-brand-secondary: 0 0% 100%;         /* #ffffff - Pure white */
--color-brand-accent: 0 0% 100%;            /* #ffffff - White accents */
--color-brand-neutral: 0 0% 9%;             /* #171717 - Deep charcoal */
```

### Semantic Colors
```css
--color-background: 48 17% 92%;             /* #f0eee7 - Light warm tan */
--color-foreground: 0 0% 9%;                /* #171717 - Dark text */
--color-primary: var(--color-brand-primary);
--color-secondary: var(--color-brand-secondary);
--color-muted: 48 17% 88%;                  /* #e8e5dc - Slightly darker warm tan */
--color-muted-foreground: 0 0% 45%;         /* Muted text */
--color-destructive: 0 72% 51%;             /* #ef4444 */
--color-border: 48 17% 85%;                 /* #ddd9ce - Light warm border */
```

### Usage
```css
/* Use semantic color tokens */
background-color: hsl(var(--color-background));
color: hsl(var(--color-foreground));
border-color: hsl(var(--color-border));

/* Use brand colors directly */
background-color: hsl(var(--color-brand-primary));
```

## 📝 Typography Tokens

### Font Families
```css
--font-family-display: 'ITC Garamond Std', Georgia, 'Times New Roman', serif;
--font-family-body: 'Styrene B', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-serif: 'Tiempos Text', Georgia, 'Times New Roman', serif;
```

### Font Weights
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
```

### Font Sizes
```css
--font-size-xs: 0.75rem;                    /* 12px */
--font-size-sm: 0.875rem;                   /* 14px */
--font-size-base: 1rem;                     /* 16px */
--font-size-lg: 1.125rem;                   /* 18px */
--font-size-xl: 1.25rem;                    /* 20px */
--font-size-2xl: 1.5rem;                    /* 24px */
--font-size-3xl: 1.875rem;                  /* 30px */
--font-size-4xl: 2.25rem;                   /* 36px */
--font-size-5xl: 3rem;                      /* 48px */
--font-size-6xl: 3.75rem;                   /* 60px */
```

### Line Heights
```css
--line-height-tight: 1.1;
--line-height-normal: 1.5;
--line-height-relaxed: 1.6;
--line-height-loose: 1.7;
```

### Letter Spacing
```css
--letter-spacing-tight: -0.01em;
--letter-spacing-normal: -0.005em;
--letter-spacing-wide: 0;
```

### Usage
```css
/* Typography classes use tokens */
.text-display {
  font-family: var(--font-family-display);
  font-weight: var(--font-weight-medium);
  font-size: clamp(var(--font-size-3xl), 4vw + 0.5rem, var(--font-size-6xl));
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

/* Custom typography */
.custom-heading {
  font-family: var(--font-family-display);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
}
```

## 📏 Spacing Tokens

```css
--spacing-0: 0;
--spacing-1: 0.25rem;                       /* 4px */
--spacing-2: 0.5rem;                        /* 8px */
--spacing-3: 0.75rem;                       /* 12px */
--spacing-4: 1rem;                          /* 16px */
--spacing-5: 1.25rem;                       /* 20px */
--spacing-6: 1.5rem;                        /* 24px */
--spacing-8: 2rem;                          /* 32px */
--spacing-10: 2.5rem;                       /* 40px */
--spacing-12: 3rem;                         /* 48px */
--spacing-16: 4rem;                         /* 64px */
--spacing-20: 5rem;                         /* 80px */
--spacing-24: 6rem;                         /* 96px */
--spacing-32: 8rem;                         /* 128px */
```

### Usage
```css
/* Use spacing tokens */
padding: var(--spacing-4);
margin: var(--spacing-8);
gap: var(--spacing-6);
```

## 🔲 Border Radius Tokens

```css
--radius-none: 0;
--radius-sm: 0.25rem;                       /* 4px */
--radius-md: 0.375rem;                      /* 6px */
--radius-lg: 0.5rem;                        /* 8px */
--radius-xl: 0.75rem;                       /* 12px */
--radius-2xl: 1rem;                         /* 16px */
--radius-3xl: 1.5rem;                       /* 24px */
--radius-full: 9999px;
```

### Usage
```css
border-radius: var(--radius-lg);
border-radius: var(--radius-full);
```

## 🌟 Shadow Tokens

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-brand: 0 4px 6px -1px rgb(230 184 0 / 0.1), 0 2px 4px -1px rgb(230 184 0 / 0.06);
```

### Usage
```css
box-shadow: var(--shadow-md);
box-shadow: var(--shadow-brand);
```

## ⚡ Animation Tokens

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
```

### Easing Functions
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Usage
```css
transition: all var(--duration-normal) var(--ease-out);
animation-duration: var(--duration-slow);
```

## 📐 Z-Index Tokens

```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
--z-toast: 1080;
```

### Usage
```css
z-index: var(--z-modal);
z-index: var(--z-dropdown);
```

## 🎯 Typography Scale Classes

### Display Text
```css
.text-display {
  font-family: var(--font-family-display);
  font-weight: var(--font-weight-medium);
  font-size: clamp(var(--font-size-3xl), 4vw + 0.5rem, var(--font-size-6xl));
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
```

### Headlines
```css
.text-headline {
  font-family: var(--font-family-display);
  font-weight: var(--font-weight-medium);
  font-size: clamp(var(--font-size-2xl), 3vw + 0.5rem, var(--font-size-4xl));
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
```

### Titles
```css
.text-title {
  font-family: var(--font-family-display);
  font-weight: var(--font-weight-medium);
  font-size: clamp(var(--font-size-xl), 2vw + 0.25rem, var(--font-size-2xl));
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
```

### Body Text
```css
.text-body-large {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  font-size: clamp(var(--font-size-lg), 1.5vw + 0.5rem, var(--font-size-xl));
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}

.text-body {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}

.text-small {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
```

### Serif Emphasis
```css
.text-serif-large {
  font-family: var(--font-family-serif);
  font-weight: var(--font-weight-regular);
  font-size: clamp(var(--font-size-2xl), 2vw + 0.5rem, var(--font-size-3xl));
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-wide);
}
```

## 🔄 Legacy Support

The system maintains backward compatibility by mapping new token names to existing CSS variables:

```css
/* Legacy variables still work */
--background: var(--color-background);
--foreground: var(--color-foreground);
--primary: var(--color-primary);
--secondary: var(--color-secondary);
--muted: var(--color-muted);
--border: var(--color-border);
--radius: var(--radius-lg);
```

## 🌙 Dark Mode Support

Dark mode tokens are defined in the `.dark` class:

```css
.dark {
  --color-background: 0 0% 5%;
  --color-foreground: 48 25% 96%;
  --color-primary: 19 61% 58%;
  /* ... other dark mode overrides */
}
```

## 📋 Best Practices

1. **Always use tokens** instead of hardcoded values
2. **Use semantic color tokens** for UI elements
3. **Use typography classes** for consistent text styling
4. **Use spacing tokens** for consistent layouts
5. **Use animation tokens** for consistent motion
6. **Test in both light and dark modes**

## 🔧 Adding New Tokens

When adding new design tokens:

1. Add the token to the appropriate section in `:root`
2. Document it in this file
3. Update any related components
4. Test across different screen sizes and themes

## 📚 Related Files

- `app/globals.css` - Main token definitions
- `tailwind.config.ts` - Tailwind configuration
- `components.json` - shadcn/ui configuration
- `docs/STYLE-SYSTEM.md` - General style system documentation
