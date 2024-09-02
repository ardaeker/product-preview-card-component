import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "var(--color-white)",
      cream: "var(--color-cream)",
      gunmetal: "var(--color-gunmetal)",
      "dark-aquamarine": "var(--color-dark-aquamarine)",
      "light-aquamarine": "var(--color-light-aquamarine)",
      "aurometal-saurus": "var(--color-aurometal-saurus)",
    },
    fontFamily: {
      fraunces: [
        "var(--font-fraunces)",
        {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      ],
      montserrat: [
        "var(--font-montserrat)",
        {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      ],
    },
    extend: {
      maxWidth: {
        card: "var(--card-max-width)",
      },
      spacing: {
        "7.5": "1.875rem",
      },
      borderRadius: {
        card: "var(--card-border-radius)",
      },
      letterSpacing: {
        category: "0.3125em",
      },
      fontSize: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
