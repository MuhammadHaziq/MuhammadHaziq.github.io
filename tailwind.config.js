/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Safelist ensures dynamic theme classes (from project data) aren't purged
  safelist: [
    // Gradient backgrounds for project headers
    "from-blue-100", "to-blue-300", "dark:from-blue-900/40", "dark:to-blue-700/30",
    "from-teal-100", "to-teal-300", "dark:from-teal-900/40", "dark:to-teal-700/30",
    "from-amber-100", "to-amber-300", "dark:from-amber-900/40", "dark:to-amber-700/30",
    "from-pink-100", "to-pink-300", "dark:from-pink-900/40", "dark:to-pink-700/30",
    // Title colors
    "text-blue-900", "dark:text-blue-100",
    "text-teal-900", "dark:text-teal-100",
    "text-amber-900", "dark:text-amber-100",
    "text-pink-900", "dark:text-pink-100",
    // Domain colors
    "text-blue-700", "dark:text-blue-300",
    "text-teal-700", "dark:text-teal-300",
    "text-amber-700", "dark:text-amber-300",
    "text-pink-700", "dark:text-pink-300",
    // Tag backgrounds & text
    "bg-purple-100", "text-purple-800", "dark:bg-purple-900/40", "dark:text-purple-200",
    "bg-blue-100", "text-blue-800", "dark:bg-blue-900/40", "dark:text-blue-200",
    "bg-amber-100", "text-amber-800", "dark:bg-amber-900/40", "dark:text-amber-200",
    "bg-teal-100", "text-teal-800", "dark:bg-teal-900/40", "dark:text-teal-200",
    "bg-orange-100", "text-orange-800", "dark:bg-orange-900/40", "dark:text-orange-200",
    "bg-red-100", "text-red-800", "dark:bg-red-900/40", "dark:text-red-200",
    "bg-gray-100", "text-gray-800", "dark:bg-white/10", "dark:text-white/70",
    // Status text
    "text-green-800", "dark:text-green-300",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};