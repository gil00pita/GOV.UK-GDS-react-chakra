import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// If these are plain objects (e.g. { blue: "#1d70b8" }),
// convert them to token objects (e.g. { blue: { value: "#1d70b8" } }).
import { colors } from './colors'
// v3 uses recipes instead of components
import { components } from './components' // rename/export recipes from that file
import { fonts } from './fonts'

const govUkThemeConfig = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
      radii: {
        none: { value: '0' },
        sm: { value: '0' },
        md: { value: '0' },
        lg: { value: '0' },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: {
            base: '{colors.brand.blue}',
            _dark: '{colors.brand.blueDark}',
          },
        },
        danger: { value: '{colors.brand.red}' },
        info: { value: '{colors.brand.blue}' },
        success: { value: '{colors.brand.green}' },
        subtleBg: { value: '{colors.brand.lightGrey}' },
      },
    },
    recipes: components,
  },
})

export const govUkTheme = createSystem(defaultConfig, govUkThemeConfig)
