import type { NextPage } from 'next'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

import Menu from '../conponents/Menu'
import Navbar from '../conponents/Nav'
import Content from '../conponents/Content'

import { darkTheme, lightTheme } from '../styles/my-theme'

const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useState(false)
  console.log(darkMode);


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Content />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default Home


// styling here
const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`
