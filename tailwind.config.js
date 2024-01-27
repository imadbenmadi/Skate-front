/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: "#525252",
                white: "#fff",
                green: "#078343",
                blue: "#004172",
            },
        },
    },
    plugins: [],
};
