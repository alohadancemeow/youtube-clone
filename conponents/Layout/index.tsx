import React, { FC } from 'react'

import Menu from '../Menu'
import Navbar from '../Nav'

import {
    Container,
    Main,
    Wrapper
} from './styles'

type Props = {
    children: React.ReactElement
}

const Layout: FC<Props> = ({ children }: Props) => {
    return (
        <Container>
            <Menu />
            <Main>
                <Navbar />
                <Wrapper>
                    {children}
                </Wrapper>
            </Main>
        </Container>
    )
}

export default Layout