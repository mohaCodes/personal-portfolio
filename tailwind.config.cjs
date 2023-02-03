/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./index.html",
        "./src/*.{js,ts,jsx,tsx,css}",
        "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-background": "#242424",
                "white-text": "#FFFFFF"
            },
            fontFamily: {
                lato: "'Lato', sans-serif",
            },
        },
    },
    plugins: [],
}
