import React from 'react'

// icons
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// ui components
import {
    Container,
    Button,
    Buttons,
    Content,
    Details,
    Info,
    Recommendation,
    Title,
    VideoWrapper,
    Channel,
    ChannelCounter,
    ChannelDetail,
    ChannelInfo,
    ChannelName,
    Description,
    Hr,
    Image,
    Subscribe
} from './styles'

import Comments from '../Comments'
import Card from '../Content/Card';

type Props = {}

const VideoContent = (props: Props) => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/TGURi1mndGQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>

                <Title>Test Video</Title>
                <Details>
                    <Info>1M views • Jun 22, 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon /> 123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <PlaylistAddIcon /> Save
                        </Button>
                        <Button>
                            <MoreHorizIcon />
                        </Button>
                    </Buttons>
                </Details>

                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src="/channel-logo.jpg" />
                        <ChannelDetail>
                            <ChannelName>Hu Tao Ch.</ChannelName>
                            <ChannelCounter>1M subscribers</ChannelCounter>
                            <Description>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                                animi accusantium dolores ipsam ut.
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />

                <Comments />

            </Content>

            <Recommendation>
                {Array(15).fill(null).map((_, index) => (
                    <Card key={index} type="sm" />
                ))}
            </Recommendation>

        </Container>
    )
}

export default VideoContent