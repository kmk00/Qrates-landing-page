import styled from "styled-components";
import image1 from "../assets/tryit1.png";
import image2 from "../assets/tryit2.png";
import image3 from "../assets/tryit3.png";
import dollar from "../assets/dollar.png";
import sparkle from "../assets/sparkle.png";
import { useEffect, useState } from "react";

const Section = styled.section`
  background-color: #000;
  color: #fff;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const TitleButton = styled.button`
  border: 2px solid #fff;
  font-size: 20px;
  padding: 0.6rem;
  background-color: transparent;
  color: #fff;
`;

const H2 = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-top: 2rem;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
  max-width: 800px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 0.6rem 3rem;
  background-color: #fff804;
  color: #000;
  margin-top: 2rem;
  border-radius: 25px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const DecorationImage = styled.img`
  position: absolute;
  width: 80px;
`;

const DollarImg = styled(DecorationImage)`
  bottom: 0;
  left: -40px;
  rotate: -60deg;
`;

const SparkleImg = styled(DecorationImage)`
  top: 0;
  right: -40px;
  rotate: 20deg;
`;

const Image = styled.img`
  width: 300px;
`;

const TryItNow = () => {
  const [imageToDisplay, setImageToDisplay] = useState<string>(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageToDisplay === image1) {
        setImageToDisplay(image2);
      } else if (imageToDisplay === image2) {
        setImageToDisplay(image3);
      } else if (imageToDisplay === image3) {
        setImageToDisplay(image1);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [imageToDisplay]);

  return (
    <Section>
      <TitleButton>TRY IT NOW</TitleButton>
      <H2>Make it real with Qrates Studio</H2>
      <Text>
        Design the look and feel of your vinyl and cassette and use the profit
        calculator to immediately see how much your project will cost, and how
        much you'll earn.
      </Text>
      <ImageContainer>
        <Image src={imageToDisplay} alt="image" />
        <DollarImg src={dollar} alt="image" />
        <SparkleImg src={sparkle} alt="image" />
      </ImageContainer>
      <Button>TRY IT NOW</Button>
    </Section>
  );
};

export default TryItNow;
