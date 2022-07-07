import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { darkTheme, lightTheme } from '../styles/my-theme'

import { useStore } from '../state/store'

function MyApp({ Component, pageProps }: AppProps) {

  const darkMode = useStore((state) => state.darkMode)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
