import React, { FC } from 'react'
import Link from 'next/link';

import { useStore } from '../../state/store'
import { useSession, signIn, signOut } from "next-auth/react"
import { mainMenu, subMenu, moreMenu, subscriptionsMenu, settingMenu } from './MenuData'

// icons
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// ui compoents
import { Title, Wrapper } from './styles'
import { Button } from '../element-styles';

// mui
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const Menu: FC = () => {

  const darkMode = useStore((state) => state.darkMode)
  const setDarkMode = useStore((state) => state.setDarkMode)
  const open = useStore((state) => state.open)
  const setOpen = useStore((state) => state.setOpen)

  const { data: session } = useSession()

  const LoginSection = () => (
    <div>
      Sign in to like videos, comment, and subscribe.
      <Button onClick={() => signIn()}>
        <AccountCircleOutlinedIcon />
        SIGN IN
      </Button>
    </div>

  )
  const LogoutSection = () => (
    <div>
      Signed in as {session && session.user?.email}
      <Button
        onClick={() => signOut()}
        style={{ color: 'red', border: '1px solid red' }}
      >
        <ExitToAppIcon />
        SIGN OUT
      </Button>
    </div>
  )


  const OpenedDrawer = () => (
    <Box
      sx={{ width: 250 }}
    >
      <List>
        {mainMenu.map(({ name, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subMenu.map(({ name, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <Wrapper>
        {!session
          ? <LoginSection />
          : <LogoutSection />
        }
      </Wrapper>
      <Divider />

      <Wrapper>
        <Title>More from younoob</Title>
      </Wrapper>
      <List>
        {moreMenu.map(({ name, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {settingMenu.map(({ name, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={setDarkMode}>
            <ListItemIcon><SettingsBrightnessOutlinedIcon /></ListItemIcon>
            <ListItemText>Switch Mode</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    <div>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={setOpen}
      >
        <OpenedDrawer />
      </Drawer>
    </div>
  )
}

export default Menu