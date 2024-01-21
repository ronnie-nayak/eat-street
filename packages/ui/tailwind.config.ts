import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config = {
  presets: [sharedConfig],
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
