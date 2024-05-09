import styled from "styled-components";
import image1 from "../assets/LearnMore1.png";
import image2 from "../assets/LearnMore2.png";

const Section = styled.section`
  display: flex;
  text-align: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const SectionCard = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  &:nth-child(1) {
    background-color: #81836c;
  }

  &:nth-child(2) {
    background-color: #f8d8d8;
  }

  border-right: 3px solid #000;

  @media (max-width: 1000px) {
    padding: 2rem;
    margin: 0 auto;
    border-right: none;
    border-bottom: 3px solid #000;
  }
`;

const ImageComponent = styled.div`
  margin-top: 3rem;
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const TitleButton = styled.button`
  border: 3px solid #000;
  font-size: 20px;
  padding: 0.6rem;
  background-color: white;
  color: #000;
`;

const H2 = styled.h2`
  color: #000;
  font-size: 40px;
  margin: 1rem 0;
`;

const Text = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 0.6rem 2rem;
  background-color: #000;
  color: white;
  cursor: pointer;
  border-radius: 25px;
`;

const LearnMore = () => {
  return (
    <Section>
      <SectionCard>
        <ImageComponent>
          <img src={image1} alt="image1" />
        </ImageComponent>
        <TitleButton>ARTIST TOOLKIT</TitleButton>
        <H2>Take you and your works to next level.</H2>
        <Text>
          We have a lot of informations and tips about music production,
          physical format and music business for you.
        </Text>
        <Button>LEARN MORE</Button>
      </SectionCard>
      <SectionCard>
        <ImageComponent>
          <img src={image2} alt="image2" />
        </ImageComponent>
        <TitleButton>CUSTOMER SUPPORT</TitleButton>
        <H2>Here to help, whenever you need it.</H2>
        <Text>
          Whether you’re an artist in the middle of product, or a fan with
          questions about your order; our team is here to help.
        </Text>
        <Button>CONTACT US</Button>
      </SectionCard>
    </Section>
  );
};

export default LearnMore;
