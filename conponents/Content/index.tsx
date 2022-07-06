import React from 'react'
import Card from './Card'

// ui componets
import {
    Container,

} from './styles'

type Props = {}

const Content = (props: Props) => {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export default Content