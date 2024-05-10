import styled from "styled-components";

import Logo from "../assets/logofooter.svg";
import fbIcon from "../assets/facebook.svg";
import igIcon from "../assets/instagram.svg";
import twIcon from "../assets/twitter.svg";

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
  background-color: #000;
  color: #fff;
`;

const LinksComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 0 auto;
`;

const LinksCollumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    list-style: none;
  }

  li {
    cursor: pointer;
    margin-top: 0.4rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const H3 = styled.h3`
  font-size: 28px;
`;

const BottomComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialsIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 80%;
  }

  background-color: #fff;

  border-radius: 50%;
`;

const Select = styled.select`
  border: 2px solid #fff;
  font-size: 20px;
  padding: 0.6rem;
  background-color: transparent;
  color: #fff;

  & option {
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <LinksComponent>
        <Wrapper>
          <LinksCollumn>
            <H3>FOR ARTISTS</H3>
            <ul>
              <li>
                <a href="#">For Artists</a>
              </li>
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <a href="#">Artist Toolkit</a>
              </li>
              <li>
                <a href="#">Referral Program</a>
              </li>
            </ul>
          </LinksCollumn>
          <LinksCollumn>
            <H3>FOR FANS</H3>
            <ul>
              <li>
                <a href="#">For Fans</a>
              </li>
              <li>
                <a href="#">Records</a>
              </li>
              <li>
                <a href="#">Cassettes</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
              <li>
                <a href="#">Qrates Curated</a>
              </li>
            </ul>
          </LinksCollumn>
        </Wrapper>
        <Wrapper>
          <LinksCollumn>
            <H3>OUR COMPANY</H3>
            <ul>
              <li>
                <a href="#">About Qrates</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </LinksCollumn>
          <LinksCollumn>
            <H3>HELP</H3>
            <ul>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
            </ul>
          </LinksCollumn>
        </Wrapper>
      </LinksComponent>
      <BottomComponent>
        <img src={Logo} />
        <Container>
          <Select>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Portuguese</option>
          </Select>
          <SocialsIcons>
            <Icon>
              <img src={fbIcon} />
            </Icon>
            <Icon>
              <img src={igIcon} />
            </Icon>
            <Icon>
              <img src={twIcon} />
            </Icon>
          </SocialsIcons>
          <p>© 2022 Qrates | Clone.</p>
        </Container>
      </BottomComponent>
    </Footer>
  );
};

export default FooterComponent;
