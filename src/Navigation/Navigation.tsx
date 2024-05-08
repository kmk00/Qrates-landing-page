import styled from "styled-components";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";
import menuIcon from "../assets/menu.svg";
import fbIcon from "../assets/facebook.svg";
import igIcon from "../assets/instagram.svg";
import twIcon from "../assets/twitter.svg";
import arrowIcon from "../assets/chevron-up.svg";
import { useEffect, useState } from "react";

const Image = styled.img.attrs({
  src: `${logo}`,
})`
  width: 50px;
  height: 50px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavigationDesktop = styled.nav`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media (max-width: 990px) {
    display: none;
  }
`;

const NavigationMobile = styled.nav`
  font-size: 30px;
  padding: 1rem;

  @media (min-width: 990px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 22px;
  @media screen and (max-width: 990px) {
    width: 30px;
  }
`;

const MenuIcon = styled(Icon)`
  width: 40px;
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;

const DiscoverSubMenu = styled.div`
  display: flex;
  padding: 0 0.8rem;
  font-size: 20px;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;

  & + ${Icon} {
    transition: transform 0.3s;
  }

  @keyframes rotate {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  &:checked + ${Icon} {
    transform: rotate(0deg);
  }
`;

const Text = styled.p``;

const Header = styled.header`
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #b2b2b2;
  border: none;
  border-radius: 25px;
  color: #fff;
  padding: 15px 30px;
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ColumnContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContainerBetween = styled(Container)`
  justify-content: space-between;
`;

const Menu = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const SocialIcon = styled(Icon)`
  width: 40px;
`;

const ArrowIcon = styled(Icon)`
  transform: rotate(180deg);
`;

const MobileButton = styled.button<{ $primary?: boolean }>`
  cursor: pointer;
  border: none;
  background-color: ${({ $primary }) => ($primary ? "#f8f8f8" : "#000")};
  color: ${({ $primary }) => ($primary ? "#000" : "#f8f8f8")};
  font-family: "Noto Sans", sans-serif;
  border: ${({ $primary }) => $primary && " 3px solid #000"};
  border-radius: 25px;
  letter-spacing: 1px;
  padding: 15px 30px;
  font-weight: 700;
`;

const SubMenuAbsolute = styled(DiscoverSubMenu)`
  font-size: 16px;
  padding: 0.6rem 0.8rem;
  position: absolute;
  top: 0;
  margin-top: 2rem;
  background-color: black;
  color: white;
`;

const NavigationComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Header>
      <NavigationDesktop>
        <Navigation>
          <Image alt="logo" />
          <ColumnContainer>
            <Label onChange={toggleSubMenu}>
              <Text>DISCOVER MUSIC</Text>
              <Input type="checkbox" />
              <Icon alt="icon" src={arrowIcon} />
            </Label>
            {showSubMenu && (
              <SubMenuAbsolute>
                <Link href="#">Records</Link>
                <Link href="#">Cassettes</Link>
                <Link href="#">Stories</Link>
                <Link href="#">Qrates Curated</Link>
              </SubMenuAbsolute>
            )}
          </ColumnContainer>
          <Link href="#">FOR ARTISTS</Link>
          <Link href="#">FOR FANS</Link>
          <Icon alt="icon" src={searchIcon} />
          <Icon alt="icon" src={cartIcon} />
        </Navigation>
        <Buttons>
          <Link href="#">LOG IN</Link>
          <Button>
            <Link href="#">MAKE YOUR OWN</Link>
          </Button>
        </Buttons>
      </NavigationDesktop>
      <NavigationMobile>
        <ContainerBetween>
          <Image alt="logo" />
          <Container>
            <Icon alt="icon" src={searchIcon} />
            <Icon alt="icon" src={cartIcon} />
            <MenuIcon onClick={toggleMenu} alt="icon" src={menuIcon} />
          </Container>
        </ContainerBetween>
        {showMenu && <Menu />}
        <Menu>
          <Label onChange={toggleSubMenu}>
            <Text>DISCOVER MUSIC</Text>
            <Input type="checkbox" />
            <ArrowIcon alt="icon" src={arrowIcon} />
          </Label>
          {showSubMenu && (
            <DiscoverSubMenu>
              <Link href="#">Records</Link>
              <Link href="#">Cassettes</Link>
              <Link href="#">Stories</Link>
              <Link href="#">Qrates Curated</Link>
            </DiscoverSubMenu>
          )}
          <Link href="#">FOR ARTISTS</Link>
          <Link href="#">FOR FANS</Link>
          <Container>
            <SocialIcon alt="icon" src={fbIcon} />
            <SocialIcon alt="icon" src={igIcon} />
            <SocialIcon alt="icon" src={twIcon} />
          </Container>
          <MobileButton>LOG IN</MobileButton>
          <MobileButton $primary>MAKE YOUR OWN</MobileButton>
        </Menu>
      </NavigationMobile>
    </Header>
  );
};

export default NavigationComponent;
