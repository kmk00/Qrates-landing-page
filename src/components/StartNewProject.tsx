import styled from "styled-components";
import arrowRight from "../assets/arrowright.svg";
import arrowDown from "../assets/arrowdown.svg";

const Section = styled.section`
  background-color: #000;
  color: #fff;
  padding: 6rem 2rem;
`;

const H2 = styled.h2`
  font-size: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Icon = styled.img.attrs({ alt: "icon" })`
  width: 64px;
  height: 64px;

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border: 2px solid #fff;
  font-size: 20px;
  padding: 1rem 2rem;
  background-color: transparent;
  cursor: pointer;
  border-radius: 40px;
  color: #fff;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StartNewProject = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <H2>Start a new project</H2>
          <Icon src={arrowRight} />
        </Container>
        <Button>MAKE YOUR OWN</Button>
      </Wrapper>
    </Section>
  );
};

export default StartNewProject;
