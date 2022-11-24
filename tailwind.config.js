/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light:{
          "primary": "#F7F6F2",
          
          "secondary": "#F000B8",
                   
          "accent": "#37CDBE",
                   
          "neutral": "#3D4451",
                   
          "base-100": "#F7F6F2",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
        },
        night:{
          "primary": "#fcd34d",
          
          "secondary": "#F000B8",
                    
          "accent": "#37CDBE",
                    
          "neutral": "#3D4451",
                    
          "base-100": "#150050",
                    
          "info": "#3ABFF8",
                    
          "success": "#36D399",
                    
          "warning": "#FBBD23",
                    
          "error": "#F87272",
        }
      }

  ],
    // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}
