/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "pet-pattern": "url('/img/wallpaperA.jpg')",
            },
            maxWidth: {
                "9/20": "45%",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
