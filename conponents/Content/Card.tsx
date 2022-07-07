import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const Card = (props: Props) => {
    return (
        <Container>
            <Link href={'/video'}>
                <Image
                    src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
                    alt='thumbnail-image'
                />
            </Link>
            <Details>
                <ChannelImage
                    src='/channel-logo.jpg'
                    alt='channel-image'
                />
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>alohadancemeow</ChannelName>
                    <Info>1M views • 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}

export default Card

// styles
const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
    gap: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
    flex: 1;
`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
    flex: 1;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const Texts = styled.div``
const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`
const ChannelName = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`