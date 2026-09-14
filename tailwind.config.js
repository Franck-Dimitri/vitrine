import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Figtree', ...defaultTheme.fontFamily.sans],
                display: ['Outfit', 'Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
            },
            colors: {
                vitrine: {
                    dark: '#080D1A',        // Bleu nuit très profond
                    navy: '#0B132B',        // Bleu nuit identitaire
                    surface: '#111C38',     // Bleu foncé cartes et conteneurs
                    surfaceBorder: '#1E2D56',// Bordures subtiles bleu acier
                    green: '#00D084',       // Vert éclatant signature
                    greenHover: '#00B875',  // Vert d'action hover
                    greenDark: '#059669',   // Vert profond
                    greenMuted: 'rgba(0, 208, 132, 0.12)', // Halo vert
                    light: '#F8FAFC',       // Blanc cassé textuel
                    muted: '#94A3B8',       // Gris bleuté pour descriptions
                },
            },
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            gridColumn: {
                'span-6': 'span 6 / span 6',
                'span-10': 'span 10 / span 10',
                'span-16': 'span 16 / span 16',
            },
            transitionTimingFunction: {
                'koto-expand': 'cubic-bezier(0.28, 0.00, 0.00, 1.00)',
                'koto-glide': 'cubic-bezier(0.65, 0.00, 0.35, 1.00)',
                'koto-snap': 'cubic-bezier(0.15, 0.00, 0.15, 1.00)',
            },
            animation: {
                'marquee': 'marquee 28s linear infinite',
                'marquee-slow': 'marquee 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },

    plugins: [forms],
};
