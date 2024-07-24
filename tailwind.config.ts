import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';
import * as theme from 'tailwindcss/defaultTheme';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './src/stories/**/*.{ts,tsx,mdx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                eteon: ['TT Norms Pro', ...theme.fontFamily.sans],
            },
            colors: {
                etn: {
                    primary: {
                        50: 'color(display-p3 0.902 0.961 0.996 / <alpha-value>)',
                        100: 'color(display-p3 0.804 0.918 0.996 / <alpha-value>)',
                        200: 'color(display-p3 0.592 0.831 0.988 / <alpha-value>)',
                        300: 'color(display-p3 0.396 0.749 0.984 / <alpha-value>)',
                        400: 'color(display-p3 0.204 0.667 0.976 / <alpha-value>)',
                        500: 'color(display-p3 0.027 0.573 0.945 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.027 0.573 0.945 / <alpha-value>)',
                        600: 'color(display-p3 0.024 0.463 0.757 / <alpha-value>)',
                        700: 'color(display-p3 0.016 0.345 0.565 / <alpha-value>)',
                        800: 'color(display-p3 0.012 0.227 0.369 / <alpha-value>)',
                        900: 'color(display-p3 0.004 0.118 0.196 / <alpha-value>)',
                        950: 'color(display-p3 0.004 0.059 0.098 / <alpha-value>)',
                    },
                    secondary: {
                        50: 'color(display-p3 0.914 0.914 0.925 / <alpha-value>)',
                        100: 'color(display-p3 0.831 0.831 0.851 / <alpha-value>)',
                        200: 'color(display-p3 0.659 0.659 0.702 / <alpha-value>)',
                        300: 'color(display-p3 0.498 0.498 0.561 / <alpha-value>)',
                        400: 'color(display-p3 0.345 0.345 0.392 / <alpha-value>)',
                        500: 'color(display-p3 0.196 0.196 0.224 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.196 0.196 0.224 / <alpha-value>)',
                        600: 'color(display-p3 0.161 0.161 0.18 / <alpha-value>)',
                        700: 'color(display-p3 0.122 0.122 0.137 / <alpha-value>)',
                        800: 'color(display-p3 0.075 0.075 0.086 / <alpha-value>)',
                        900: 'color(display-p3 0.039 0.039 0.043 / <alpha-value>)',
                        950: 'color(display-p3 0.02 0.02 0.02 / <alpha-value>)',
                    },
                    success: {
                        50: 'color(display-p3 0.894 0.988 0.941 / <alpha-value>)',
                        100: 'color(display-p3 0.784 0.973 0.878 / <alpha-value>)',
                        200: 'color(display-p3 0.588 0.949 0.769 / <alpha-value>)',
                        300: 'color(display-p3 0.376 0.925 0.651 / <alpha-value>)',
                        400: 'color(display-p3 0.18 0.902 0.541 / <alpha-value>)',
                        500: 'color(display-p3 0.09 0.749 0.42 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.09 0.749 0.42 / <alpha-value>)',
                        600: 'color(display-p3 0.075 0.608 0.341 / <alpha-value>)',
                        700: 'color(display-p3 0.055 0.447 0.251 / <alpha-value>)',
                        800: 'color(display-p3 0.035 0.302 0.169 / <alpha-value>)',
                        900: 'color(display-p3 0.016 0.141 0.078 / <alpha-value>)',
                        950: 'color(display-p3 0.008 0.071 0.039 / <alpha-value>)',
                    },
                    warning: {
                        50: 'color(display-p3 1 0.976 0.922 / <alpha-value>)',
                        100: 'color(display-p3 1 0.953 0.839 / <alpha-value>)',
                        200: 'color(display-p3 1 0.91 0.678 / <alpha-value>)',
                        300: 'color(display-p3 1 0.863 0.522 / <alpha-value>)',
                        400: 'color(display-p3 1 0.82 0.361 / <alpha-value>)',
                        500: 'color(display-p3 1 0.776 0.196 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 1 0.776 0.196 / <alpha-value>)',
                        600: 'color(display-p3 0.961 0.686 0 / <alpha-value>)',
                        700: 'color(display-p3 0.722 0.518 0 / <alpha-value>)',
                        800: 'color(display-p3 0.478 0.345 0 / <alpha-value>)',
                        900: 'color(display-p3 0.239 0.173 0 / <alpha-value>)',
                        950: 'color(display-p3 0.122 0.086 0 / <alpha-value>)',
                    },
                    alert: {
                        50: 'color(display-p3 0.992 0.91 0.91 / <alpha-value>)',
                        100: 'color(display-p3 0.984 0.82 0.816 / <alpha-value>)',
                        200: 'color(display-p3 0.965 0.639 0.635 / <alpha-value>)',
                        300: 'color(display-p3 0.949 0.459 0.451 / <alpha-value>)',
                        400: 'color(display-p3 0.929 0.278 0.271 / <alpha-value>)',
                        500: 'color(display-p3 0.914 0.098 0.086 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.914 0.098 0.086 / <alpha-value>)',
                        600: 'color(display-p3 0.729 0.078 0.071 / <alpha-value>)',
                        700: 'color(display-p3 0.549 0.059 0.051 / <alpha-value>)',
                        800: 'color(display-p3 0.365 0.039 0.035 / <alpha-value>)',
                        900: 'color(display-p3 0.184 0.02 0.016 / <alpha-value>)',
                        950: 'color(display-p3 0.09 0.012 0.008 / <alpha-value>)',
                    },
                    orange: {
                        50: 'color(display-p3 0.996 0.941 0.922 / <alpha-value>)',
                        100: 'color(display-p3 0.996 0.886 0.843 / <alpha-value>)',
                        200: 'color(display-p3 0.992 0.784 0.706 / <alpha-value>)',
                        300: 'color(display-p3 0.988 0.667 0.553 / <alpha-value>)',
                        400: 'color(display-p3 0.984 0.569 0.416 / <alpha-value>)',
                        500: 'color(display-p3 0.98 0.451 0.259 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.98 0.451 0.259 / <alpha-value>)',
                        600: 'color(display-p3 0.973 0.278 0.027 / <alpha-value>)',
                        700: 'color(display-p3 0.722 0.208 0.02 / <alpha-value>)',
                        800: 'color(display-p3 0.486 0.141 0.012 / <alpha-value>)',
                        900: 'color(display-p3 0.235 0.067 0.008 / <alpha-value>)',
                        950: 'color(display-p3 0.118 0.035 0.004 / <alpha-value>)',
                    },
                    yellow: {
                        50: 'color(display-p3 1 0.984 0.902 / <alpha-value>)',
                        100: 'color(display-p3 0.996 0.973 0.824 / <alpha-value>)',
                        200: 'color(display-p3 0.992 0.941 0.647 / <alpha-value>)',
                        300: 'color(display-p3 0.992 0.914 0.471 / <alpha-value>)',
                        400: 'color(display-p3 0.988 0.878 0.275 / <alpha-value>)',
                        500: 'color(display-p3 0.984 0.851 0.102 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.984 0.851 0.102 / <alpha-value>)',
                        600: 'color(display-p3 0.847 0.722 0.016 / <alpha-value>)',
                        700: 'color(display-p3 0.647 0.553 0.012 / <alpha-value>)',
                        800: 'color(display-p3 0.431 0.369 0.008 / <alpha-value>)',
                        900: 'color(display-p3 0.216 0.184 0.004 / <alpha-value>)',
                        950: 'color(display-p3 0.098 0.082 0 / <alpha-value>)',
                    },
                    lime: {
                        50: 'color(display-p3 0.961 1 0.902 / <alpha-value>)',
                        100: 'color(display-p3 0.925 0.996 0.824 / <alpha-value>)',
                        200: 'color(display-p3 0.855 0.992 0.647 / <alpha-value>)',
                        300: 'color(display-p3 0.78 0.992 0.471 / <alpha-value>)',
                        400: 'color(display-p3 0.702 0.988 0.275 / <alpha-value>)',
                        500: 'color(display-p3 0.631 0.984 0.102 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.631 0.984 0.102 / <alpha-value>)',
                        600: 'color(display-p3 0.514 0.847 0.016 / <alpha-value>)',
                        700: 'color(display-p3 0.392 0.647 0.012 / <alpha-value>)',
                        800: 'color(display-p3 0.263 0.431 0.008 / <alpha-value>)',
                        900: 'color(display-p3 0.129 0.216 0.004 / <alpha-value>)',
                        950: 'color(display-p3 0.059 0.098 0 / <alpha-value>)',
                    },
                    cyan: {
                        50: 'color(display-p3 0.902 0.976 0.996 / <alpha-value>)',
                        100: 'color(display-p3 0.824 0.957 0.996 / <alpha-value>)',
                        200: 'color(display-p3 0.647 0.918 0.992 / <alpha-value>)',
                        300: 'color(display-p3 0.451 0.871 0.988 / <alpha-value>)',
                        400: 'color(display-p3 0.275 0.831 0.984 / <alpha-value>)',
                        500: 'color(display-p3 0.102 0.792 0.98 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.102 0.792 0.98 / <alpha-value>)',
                        600: 'color(display-p3 0.02 0.663 0.843 / <alpha-value>)',
                        700: 'color(display-p3 0.016 0.494 0.627 / <alpha-value>)',
                        800: 'color(display-p3 0.008 0.341 0.431 / <alpha-value>)',
                        900: 'color(display-p3 0.004 0.169 0.216 / <alpha-value>)',
                        950: 'color(display-p3 0.004 0.078 0.098 / <alpha-value>)',
                    },
                    violet: {
                        50: 'color(display-p3 0.949 0.941 0.996 / <alpha-value>)',
                        100: 'color(display-p3 0.898 0.882 0.996 / <alpha-value>)',
                        200: 'color(display-p3 0.796 0.769 0.992 / <alpha-value>)',
                        300: 'color(display-p3 0.714 0.671 0.988 / <alpha-value>)',
                        400: 'color(display-p3 0.612 0.557 0.984 / <alpha-value>)',
                        500: 'color(display-p3 0.51 0.439 0.98 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.51 0.439 0.98 / <alpha-value>)',
                        600: 'color(display-p3 0.275 0.169 0.973 / <alpha-value>)',
                        700: 'color(display-p3 0.137 0.027 0.831 / <alpha-value>)',
                        800: 'color(display-p3 0.09 0.02 0.541 / <alpha-value>)',
                        900: 'color(display-p3 0.043 0.008 0.271 / <alpha-value>)',
                        950: 'color(display-p3 0.024 0.004 0.133 / <alpha-value>)',
                    },
                    purple: {
                        50: 'color(display-p3 0.988 0.941 1 / <alpha-value>)',
                        100: 'color(display-p3 0.969 0.863 0.996 / <alpha-value>)',
                        200: 'color(display-p3 0.945 0.749 0.992 / <alpha-value>)',
                        300: 'color(display-p3 0.914 0.612 0.988 / <alpha-value>)',
                        400: 'color(display-p3 0.886 0.494 0.984 / <alpha-value>)',
                        500: 'color(display-p3 0.855 0.365 0.98 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.855 0.365 0.98 / <alpha-value>)',
                        600: 'color(display-p3 0.8 0.106 0.973 / <alpha-value>)',
                        700: 'color(display-p3 0.627 0.024 0.776 / <alpha-value>)',
                        800: 'color(display-p3 0.424 0.016 0.525 / <alpha-value>)',
                        900: 'color(display-p3 0.204 0.008 0.251 / <alpha-value>)',
                        950: 'color(display-p3 0.11 0.004 0.137 / <alpha-value>)',
                    },
                    pink: {
                        50: 'color(display-p3 1 0.922 0.945 / <alpha-value>)',
                        100: 'color(display-p3 0.996 0.863 0.902 / <alpha-value>)',
                        200: 'color(display-p3 0.992 0.706 0.792 / <alpha-value>)',
                        300: 'color(display-p3 0.992 0.569 0.694 / <alpha-value>)',
                        400: 'color(display-p3 0.988 0.412 0.584 / <alpha-value>)',
                        500: 'color(display-p3 0.984 0.278 0.494 / <alpha-value>)',
                        DEFAULT: 'color(display-p3 0.984 0.278 0.494 / <alpha-value>)',
                        600: 'color(display-p3 0.98 0.02 0.31 / <alpha-value>)',
                        700: 'color(display-p3 0.745 0.016 0.235 / <alpha-value>)',
                        800: 'color(display-p3 0.49 0.012 0.153 / <alpha-value>)',
                        900: 'color(display-p3 0.255 0.004 0.078 / <alpha-value>)',
                        950: 'color(display-p3 0.118 0.004 0.035 / <alpha-value>)',
                    },
                },
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [twAnimate],
} satisfies Config;

export default config;
