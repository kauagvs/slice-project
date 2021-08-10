import { useState } from "react";
import {
  Button,
  Container,
  Logo,
  SlickBar,
  Item,
  Text,
  Profile,
  Details,
  Name,
  Logout
} from "./SidebarStyles";
import {
  RiNotificationLine,
  RiUserAddLine,
  RiLogoutBoxRLine
} from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";

export function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <Container>
        <Logo>
          <img src="/images/logo_size.jpg" alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item>
            <RiNotificationLine />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item>
            <GiMicrophone />
            <Text clicked={click}>Flow podcast</Text>
          </Item>
          <Item>
            <RiUserAddLine />
            <Text clicked={click}>Primo cast</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>Kauã Semenov</h4>
              <a href="/#">View Profile</a>
            </Name>

            <Logout>
              <RiLogoutBoxRLine />
            </Logout>
          </Details>
        </Profile>
      </Container>
    </>
  );
}
