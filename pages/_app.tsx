import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { darkTheme, lightTheme } from '../styles/my-theme'

import { useStore } from '../state/store'

function MyApp({ Component, pageProps: { session, pageProps } }: AppProps) {

  const darkMode = useStore((state) => state.darkMode)

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )

}

export default MyApp
