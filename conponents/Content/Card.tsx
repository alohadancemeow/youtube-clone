import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
    type?: string | undefined
}

const Card: FC<Props> = ({ type }: Props) => {
    return (
        <Container type={type}>
            <Link href={'/video'}>
                <Image
                    src="/thumbnail-image.jpg"
                    alt='thumbnail-image'
                    type={type}
                />
            </Link>
            <Details type={type}>
                <ChannelImage
                    src='/channel-logo.jpg'
                    alt='channel-image'
                    type={type}
                />

                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>
                        alohadancemeow
                        <CheckCircleIcon style={{ fontSize: '16px' }} />
                    </ChannelName>
                    <Info>1M views • 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}

export default Card

// styles
const Container = styled.div<Props>`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`
const Image = styled.img<Props>`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color: #999;
    flex: 1;
    object-fit: cover;
`
const Details = styled.div<Props>`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`
const ChannelImage = styled.img<Props>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
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
    display: flex;
    align-items: center;
    gap: 5px;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`