import type { Config } from "tailwindcss";
const baseTheme = require("./src/styles/themes/base.ts").default;

const config: Config = {
    theme: baseTheme,
    plugins: [],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    ],
};
export default config;
