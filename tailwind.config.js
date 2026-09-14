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

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Figtree', ...defaultTheme.fontFamily.sans],
                display: ['Outfit', 'Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                vitrine: {
                    dark: '#080D1A',        // Noir bleuté très profond
                    navy: '#0B132B',        // Bleu nuit identitaire
                    surface: '#111C38',     // Bleu foncé pour cartes et conteneurs
                    surfaceBorder: '#1E2D56',// Bordures subtiles bleu acier
                    green: '#00D084',       // Vert éclatant vitrine
                    greenHover: '#00B875',  // Vert d'action hover
                    greenDark: '#059669',   // Vert profond
                    greenMuted: 'rgba(0, 208, 132, 0.12)', // Halo vert
                    light: '#F8FAFC',       // Blanc cassé textuel
                    muted: '#94A3B8',       // Gris bleuté pour descriptions
                },
            },
        },
    },

    plugins: [forms],
};
