import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				xl: "1rem",
				"2xl": "1.25rem",
			},
			boxShadow: {
				soft: "0 10px 30px rgba(0,0,0,0.35)",
			},
			backdropBlur: {
				xs: "2px",
			},
			colors: {
				base: {
					950: "#070A10",
					900: "#0B1220",
					850: "#0E1628",
					800: "#111C31",
				},
				gold: {
					50: "#FFF7E6",
					200: "#FFE0A3",
					400: "#F7C66A",
					500: "#E8B64D",
					700: "#B9821D",
				},
				glass: {
					border: "rgba(255,255,255,0.10)",
					surface: "rgba(255,255,255,0.06)",
					surface2: "rgba(255,255,255,0.08)",
				},
				brand: {
					navy: "#1F3A5F",
					steel: "#4F6D8A",
					gold: "#C7A548",
					sand: "#E6D8A8",
					charcoal: "#1F2328",
					stone: "#F4F3EF",
					background: "#212a37",
					primary: "#f5bd0f",
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
