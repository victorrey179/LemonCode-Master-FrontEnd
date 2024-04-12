/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Ajusta según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      // Aquí puedes extender la configuración por defecto de Tailwind
      colors: {
        'custom-blue': '#243c5a', // Ejemplo de color personalizado
      },
      spacing: {
        '128': '32rem', // Ejemplo de un nuevo tamaño de espaciado
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'], // Ejemplo de familia de fuente personalizada
      }
    },
  },
  plugins: [
    // Aquí puedes agregar plugins de Tailwind CSS
    // require('@tailwindcss/forms'), // Ejemplo de plugin
  ],
}