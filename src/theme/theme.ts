import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    bgColorLight: '#f9f4ef',
    bgColorDark: '#16161a',

    primary: '#7f5af0',
    primaryLight: '#9175e6',
    primaryDark: '#5e43b3',

    headlineDark: '#fffffe',
    headlineLight: '#2e2e34',

    buttonTextDark: '#fffffe',
    buttonTextDarkHover: '#cdcdca',

    transparent: 'transparent',

    buttonTextLight: '#2e2e34',
    buttonTextLightHover: '#404048',

    paragraph: '#94a1b2',

    React: '#5ccfee',
    JavaScript: '#ead41c',
    TypeScript: '#2f72bc',
    Firebase: '#f2c12a',
    Bootstrap: '#7611ed',
    ChakraUI: '#28b5aa',
    SASS: '#cc699c'
  },
  initialColorMode: 'dark',
  useSystemColorMode: false
})
