/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "pet-pattern": "url('/img/wallpaperA.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
