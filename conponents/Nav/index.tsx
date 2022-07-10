import React from 'react'
import { useSession } from 'next-auth/react';

// icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

// ui componets
import {
  Container,
  Button,
  Input,
  Search,
  Wrapper,
  Avatar,
  UserInfo,
  SearchButton
} from './styles'

type Props = {}

const Navbar = (props: Props) => {

  const { data: session } = useSession()

  return (
    <Container>
      <Wrapper>

        <div>Logo</div>
        <div>
          <Search>
            <Input placeholder="Search" />
          </Search>
          <SearchButton>
            <SearchOutlinedIcon />
          </SearchButton>
          <KeyboardVoiceIcon />
        </div>

        <AppsIcon />
        <MoreVertIcon />
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