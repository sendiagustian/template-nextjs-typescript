import { CustomThemeConfig } from "tailwindcss/types/config";

const baseTheme: Partial<CustomThemeConfig & { extend: Partial<CustomThemeConfig> }> = {
    extend: {
        colors: {
            primary: "#1D4ED8",
            secondary: "#9333EA",
            accent: "#F59E0B",
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
    },
};

export default baseTheme;
