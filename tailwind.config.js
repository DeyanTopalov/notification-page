/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue});`;
    }
    return `hsla(var($variableName}))`;
  };
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-red": withOpacity("--red"),
        "clr-blue": withOpacity("--blue"),
        "clr-gray-100": withOpacity("--gray-100"),
        "clr-gray-200": withOpacity("--gray-200"),
        "clr-gray-250": withOpacity("--gray-250"),
        "clr-gray-400": withOpacity("--gray-400"),
        "clr-gray-600": withOpacity("--gray-600"),
        "clr-gray-800": withOpacity("--gray-800"),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
