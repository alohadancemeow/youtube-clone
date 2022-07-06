import React from 'react'
import Link from 'next/link';

// icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// ui componets
import {
  Container,
  Button,
  Input,
  Search,
  Wrapper
} from './styles'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        {/* <Link to="signin" style={{ textDecoration: "none" }}> */}
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        {/* </Link> */}
      </Wrapper>
    </Container>
  )
}

export default Navbar