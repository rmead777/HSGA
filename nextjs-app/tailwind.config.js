module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
      },
    },
  },
  plugins: [],
};
