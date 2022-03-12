import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  // IF COLOR MODE NOT WORKING
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const them = extendTheme({
    config,
  })

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={them.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
