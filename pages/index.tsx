import type { NextPage } from 'next'
import styled from 'styled-components'

import Menu from '../conponents/Menu'
import Navbar from '../conponents/Navbar'

const Home: NextPage = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          Video cards
        </Wrapper>
      </Main>
    </Container>
  )
}

export default Home


// styling here
const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
`
const Wrapper = styled.div`
  padding: 22px 96px;
`
