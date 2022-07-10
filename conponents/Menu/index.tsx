import React, { FC } from 'react'
import Link from 'next/link';

import { useSession, signIn, signOut } from "next-auth/react"

// icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// ui compoents
import {
  Container,
  Hr,
  Img,
  Item,
  Login,
  Logo,
  Title,
  Wrapper,
  Logout
} from './styles'
import { Button } from '../element-styles';

// state
import { useStore } from '../../state/store'


const Menu: FC = () => {

  const darkMode = useStore((state) => state.darkMode)
  const setDarkMode = useStore((state) => state.setDarkMode)

  const { data: session } = useSession()

  return (
    <Container>
      <Wrapper>

        <Link href={'/'}>
          <Logo>
            <Img src='/logo.png' />
            You Noob
          </Logo>
        </Link>

        <Link href={'/'}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>

        <Hr />
        {!session
          ? (
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Button onClick={() => signIn()}>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Login>
          ) : (
            <Logout>
              Signed in as {session.user?.email}
              <Button
                onClick={() => signOut()}
                style={{ color: 'red', border: '1px solid red' }}
              >
                <ExitToAppIcon />
                SIGN OUT
              </Button>
            </Logout>
          )
        }

        <Hr />
        <Title>MORE FROM YOUTUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>

        <Item
          onClick={setDarkMode}
        >
          <SettingsBrightnessOutlinedIcon />
          {/* {darkMode ? "Light" : "Dark"} Mode */}
          Switch Mode
        </Item>

      </Wrapper>
    </Container>
  )
}

export default Menu