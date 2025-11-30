// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#31694E', // Dark Green
                    light: '#658C58',   // Medium Green
                    dark: '#1a402d',
                },
                accent: {
                    DEFAULT: '#F0E491', // Light Yellow/Cream
                    hover: '#BBC863',   // Light Green
                },
                agro: {
                    cream: '#F0E491',
                    light: '#BBC863',
                    medium: '#658C58',
                    dark: '#31694E',
                }
            }
        },
    },
    plugins: [],
}