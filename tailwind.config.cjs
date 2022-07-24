/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    "primary": "#e90606",
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui', ...],
      'serif': ['Zilla Slab', 'ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      'body': ['Roboto Condensed', 'sans-serif']
    }
  },
  plugins: [
    require('daisyui')
  ],
}
