import styled from "styled-components";
import image1 from "../assets/hero1.jpg";
import image2 from "../assets/hero2.png";
import svg from "../assets/herosvg.svg";

const HeroContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  background-color: #000;
  padding: 6rem 2rem;
  overflow: hidden;
`;

const Button = styled.button`
  border: 2px solid #fff;
  font-size: 20px;
  padding: 0.6rem;
  background-color: transparent;
  color: #fff;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 64px;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 24px;
  margin-top: 3rem;
  line-height: 1.5;
`;

const TextContainer = styled.div`
  flex-basis: 500px;
  flex-grow: 999;

  @media (max-width: 1200px) {
    flex-basis: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Image1 = styled.div`
  flex-basis: 600px;
  margin-top: 3rem;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10;

  & > img {
    width: 50vw;
    transform: rotate(8deg);
    border: 3px solid #000;
  }

  @media (max-width: 768px) {
    img {
      width: 300px;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 700px;
    }
  }
`;

const Image2 = styled.div`
  flex-basis: 600px;
  margin-top: -20rem;
  img {
    border: 3px solid #000;

    width: 50vw;
    transform: rotate(-5deg);
  }

  @media (max-width: 768px) {
    margin-top: -4rem;

    img {
      width: 300px;
    }
  }

  @media (min-width: 1200px) {
    margin-left: 5rem;
    img {
      width: 700px;
    }
  }
`;

const Image3 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  margin-bottom: -20rem;

  width: 60%;

  img {
    width: 100%;
    transform: rotate(2deg);
  }

  @media (max-width: 1200px) {
    left: auto;
    img {
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <FlexContainer>
          <TextContainer>
            <Button>FOR ARTISTS</Button>
            <H1>Music in your hands. Without the barriers.</H1>
            <Paragraph>
              Full-service production, a global retail network, customer support
              - and you keep up to 85% of profits. ↓
            </Paragraph>
          </TextContainer>
          <Image1>
            <img src={image1} alt="hero" />
            <Image3>
              <img src={svg} alt="hero" />
            </Image3>
          </Image1>
        </FlexContainer>
        <FlexContainer>
          <Image2>
            <img src={image2} alt="hero" />
          </Image2>
        </FlexContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
