/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "node_modules/preline/dist/*.js",
        "./index.html",
    ],
    theme: {
        extend: {},
        container: {
            padding: {
                DEFAULT: "1rem",
                md: "3rem",
                lg: "4rem",
            },
        },
    },
    plugins: [require("preline/plugin")],
};
