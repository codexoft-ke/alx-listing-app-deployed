/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // for App Router
        "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router
        "./components/**/*.{js,ts,jsx,tsx}", // <-- this line is key for your Header
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
