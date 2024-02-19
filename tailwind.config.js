/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            rotate: {
                22.5: "22.5deg",
                67.5: "67.5deg",
                112.5: "112.5deg",
                135: "135deg",
                157.5: "157.5deg",
            },
        },
    },
    plugins: [],
};
