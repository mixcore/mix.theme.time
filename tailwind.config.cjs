/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Roboto Condensed', 'ui-sans-serif', 'system-ui', '-apple-system', "Segoe UI", "Helvetica Neue"],
      'serif': ['Zilla Slab', 'ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      'body': ['Roboto Condensed', 'sans-serif']
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e90606",
          "secondary": "#F000B8",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}
