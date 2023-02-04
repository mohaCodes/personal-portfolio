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
                "dark-background": "#040403",
                "white-text": "#E5D3C9",
            },
            fontFamily: {
                oswald: "'Oswald', sans-serif;",
                roboto: "'Roboto', sans-serif",
                workSans: "'Work Sans', sans-serif",
            },
        },
    },
    plugins: [],
}
