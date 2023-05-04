/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/App.vue",
    ],
    theme: {
        extend: {
            backgroundColor: {
                main: "#1E1E1E",
                navbar: "#292929",
            },
            keyframes: {
                "opacity-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                "slide-top-in": {
                    from: { transform: "translateY(-100%)", opacity: 0 },
                    to: { transform: "translateY(0)", opacity: 1 },
                },
                "slide-bottom-in": {
                    from: { transform: "translateY(25%)", opacity: 0 },
                    to: { transform: "translateY(0)", opacity: 1 },
                },
                "slide-left-in": {
                    from: { transform: "translateX(-50%)", opacity: 0 },
                    to: { transform: "translateX(0)", opacity: 1 },
                },
                "slide-right-in": {
                    from: { transform: "translateX(50%)", opacity: 0 },
                    to: { transform: "translateX(0)", opacity: 1 },
                },
                typing: {
                    from: {
                        width: "0",
                    },
                    to: {
                        width: "18ch",
                    },
                },
            },
            animation: {
                "navbar-in": "slide-top-in 0.5s ease-out",
                "image-in": "opacity-in 0.5s ease-in-out",
                "home-text-in": "slide-bottom-in 1s ease-out",
                "hello-typing": "typing 3s steps(18)",
                "about-left-in": "slide-left-in 1s ease-out",
                "about-right-in": "slide-right-in 1s ease-out",
            },
        },
    },
    plugins: [],
};
