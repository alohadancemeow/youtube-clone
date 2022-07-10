import React from 'react'
import { useSession } from 'next-auth/react';

// icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// ui componets
import {
  Container,
  Button,
  Input,
  Search,
  Wrapper,
  Avatar,
  UserInfo
} from './styles'

type Props = {}

const Navbar = (props: Props) => {

  const { data: session } = useSession()

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        {!session
          ? (
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          ) : (
            <UserInfo>
              <Avatar src={session.user?.image!} alt={session.user?.name!} />
              <span>{session.user?.name!}</span>
            </UserInfo>
          )
        }
      </Wrapper>
    </Container>
  )
}

export default Navbar