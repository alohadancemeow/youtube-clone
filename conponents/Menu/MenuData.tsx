// icons
import React from 'react';
import { SvgIconProps } from '@mui/material';

// mui icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';


type Menu = {
    name: string,
    icon: React.ReactElement<SvgIconProps>
}

export const mainMenu: Menu[] = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Explore', icon: <ExploreOutlinedIcon /> },
    { name: 'Subscriptions', icon: <SubscriptionsOutlinedIcon /> },
]

export const subMenu: Menu[] = [
    { name: 'Library', icon: <VideoLibraryOutlinedIcon /> },
    { name: 'History', icon: <HistoryOutlinedIcon /> },
    { name: 'Your videos', icon: <HistoryOutlinedIcon /> },
    { name: 'Watch later', icon: <HistoryOutlinedIcon /> },
]

export const subscriptionsMenu: Menu[] = [
    { name: 'alohadancemeow', icon: <VideoLibraryOutlinedIcon /> },
    { name: 'Hutao', icon: <HistoryOutlinedIcon /> },
    { name: 'Qiqi', icon: <HistoryOutlinedIcon /> },
]

export const moreMenu: Menu[] = [
    { name: 'YouNoob Premium', icon: <YouTubeIcon /> },
    { name: 'Gaming', icon: <SportsEsportsOutlinedIcon /> },
    { name: 'Live', icon: <PodcastsOutlinedIcon /> },
    { name: 'Sports', icon: <EmojiEventsOutlinedIcon /> },
]

export const settingMenu: Menu[] = [
    { name: 'Settings', icon: <SettingsOutlinedIcon /> },
    { name: 'Report history', icon: <FlagOutlinedIcon /> },
    { name: 'Help', icon: <HelpOutlineOutlinedIcon /> },
    { name: 'Send feedback', icon: <HistoryOutlinedIcon /> },
]