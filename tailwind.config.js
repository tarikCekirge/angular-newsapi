module.exports = {
    prefix: '',
    purge: {
        enabled: true,
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            'sans': ['Playfair Display', 'serif'],
            'serif': ['Playfair Display', 'serif'],
            'mono': ['Playfair Display', 'serif'],
            'display': ['Playfair Display', 'serif'],
            'body': ['Playfair Display', 'serif'],
        },
        extend: {
            colors: {
                current: 'currentColor',
                transparent: 'transparent',

                black: '#000',
                white: '#fff',
                'angular': {
                    '50': '#fff5f6',
                    '100': '#f9e4e6',
                    '200': '#ecc3c5',
                    '300': '#e0a2a4',
                    '400': '#da9294',
                    '500': '#d48183',
                    '600': '#ce7073',
                    '700': '#c86062',
                    '800': '#c14f52',
                    '900': '#bb3f41',
                    '950': '#b52e31',
                },

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};