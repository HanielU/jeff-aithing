import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
  theme: {
    colors: {
      primary: "#B76726",
      primarydark: "#1E252B",
    },
  },
  rules: [],
  shortcuts: [],
  variants: [],

  preflights: [
    {
      getCSS: () => `
      :root {
        -webkit-tap-highlight-color: transparent;        
      }

      html,
      body {
        overflow-x: hidden;
        height: 100%;
      }
      `,
    },
  ],

  presets: [myPreset, presetUno(), presetIcons({ scale: 1.2 }), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
