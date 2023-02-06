/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./index.html",
        "./src/*.{js,ts,jsx,tsx,css}",
        "./src/Components/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-background": "#040403",
                "white-text": "#E5D3C9",
                "secondary-white-text": "#D9C7BD",
                "grayish-white": "#BAACA3",
            },
            fontFamily: {
                oswald: "'Oswald', sans-serif;",
                roboto: "'Poppins', sans-serif",
                sofiaSans: "'Sofia Sans Extra Condensed', sans-serif",
            },
            screens: {
                "tablet": "426px",
                "tablet-md": "530px",
                "692": "692px",
                "650": "650px",
                "900": "900px",
                "850": "850px",
            }
        },
    },
    plugins: [],
}
