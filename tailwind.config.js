/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/App.vue"],
    theme: {
        extend: {
            backgroundColor: {
                main: "#1E1E1E",
                navbar: "#292929",
            },
        },
    },
    plugins: [],
};
