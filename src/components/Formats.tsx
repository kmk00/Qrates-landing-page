import styled from "styled-components";
import format1 from "../assets/format1.png";
import format2 from "../assets/format2.png";

const Section = styled.section`
  background-color: #e4e5de;
`;

const H1 = styled.h1`
  color: #000;
  font-size: clamp(20px, 7vw, 3rem);
  padding: 2rem;
  text-align: center;
  border-bottom: 3px solid #000;
`;

const H2 = styled.h2`
  color: #000;
  font-size: clamp(16px, 7vw, 2rem);
  text-align: center;
  margin-top: 2rem;
`;

const FormatComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 700px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ${FormatComponent}:nth-child(1) {
    border-right: 3px solid #000;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    & > ${FormatComponent}:nth-child(1) {
      border-right: none;
      border-bottom: 3px solid #000;
    }
  }
`;

const Text = styled.p`
  font-size: clamp(12px, 5vw, 1.5rem);
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 1000px) {
  }
`;

const Image = styled.img`
  width: 360px;
`;

const Formats = () => {
  return (
    <Section>
      <H1>Choose from two formats with promised quality</H1>
      <Container>
        <FormatComponent>
          <H2>Vinyl</H2>
          <Text>
            We know how special pressed records are to you. Our products are
            built for fans, by fans. We make it easy for artists to press vinyl,
            so the music you love can keep reaching ears in the most beautiful
            way.
          </Text>
          <Image src={format1} />
        </FormatComponent>
        <FormatComponent>
          <H2>Cassette</H2>
          <Text>
            Cassettes have always been special to music fans and artists.
            Whether you are saving a recording of a great concert, or preserving
            an early demo, there’s no better way to keep that music close than
            on cassette tapes.
          </Text>
          <Image src={format2} />
        </FormatComponent>
      </Container>
    </Section>
  );
};

export default Formats;
