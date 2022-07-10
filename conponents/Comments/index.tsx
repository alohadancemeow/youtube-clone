import React from 'react'

import { useSession } from 'next-auth/react'

import {
  Avatar,
  Container,
  Input,
  NewComment,
  CommentContainer,
  Date,
  Details,
  Name,
  Text
} from './styles'

type Props = {}

type Comment = {
  name: string,
  image: string,
  message: string
}

const index = (props: Props) => {

  const { data: session } = useSession()

  const Comment = ({ image, message, name }: Comment) => (
    <CommentContainer>
      <Avatar src={image} alt={name} />
      <Details>
        <Name>
          {name}
          <Date>1 day ago</Date>
        </Name>
        <Text>{message}</Text>
      </Details>
    </CommentContainer>
  )

  return (
    <Container>
      <NewComment>
        <Avatar src={session?.user?.image!} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment name='Hutao' image='/channel-logo.jpg' message='I am Hutao, I love Qiqi <3' />
      <Comment name='Qiqi' image='/user.jpg' message='I am Qiqi, I hate Hutao :(' />
      <Comment name='Hutao' image='/channel-logo.jpg' message='I am Hutao, I love Qiqi <3' />
      <Comment name='Qiqi' image='/user.jpg' message='I am Qiqi, I hate Hutao :(' />
    </Container>
  )
}

export default index