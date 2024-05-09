import styled from "styled-components";

interface TestimonialCardProps {
  image: string;
  text: string;
  name: string;
  currentPage: number;
  action: (e: any) => void;
}

const SectionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 2rem 0;
  }

  @media (min-width: 1200px) {
    padding: 4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    padding: 2rem;
  }
`;

const Image = styled.div`
  max-width: 500px;
  img {
    width: 100%;
    height: auto;
    border: 2px solid #000;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TitleButton = styled.button`
  margin-right: auto;
  border: 3px solid #000;
  font-size: 16px;
  padding: 0.6rem;
  background-color: white;
  color: #000;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  max-width: 600px;
  margin-top: 2rem;
`;

interface ButtonProps {
  highlight: boolean;
}

const Button = styled.button<ButtonProps>`
  border: 2px solid #000;
  background-color: ${({ highlight }) => (highlight ? "#000" : "#fff")};
  color: ${({ highlight }) => (highlight ? "#fff" : "#000")};
  font-size: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const TextContainer = styled.div``;

const TestimonialCard = ({
  image,
  text,
  name,
  action,
  currentPage,
}: TestimonialCardProps) => {
  return (
    <SectionCard>
      <Wrapper>
        <TitleButton>ARTISTS ON QRATES</TitleButton>
        <TextContainer>
          <Text>{text}</Text>
          <Text>—{name}</Text>
        </TextContainer>
        <ButtonsContainer>
          <Button highlight={currentPage === 1} onClick={action} value={1}>
            1
          </Button>
          <Button highlight={currentPage === 2} onClick={action} value={2}>
            2
          </Button>
        </ButtonsContainer>
      </Wrapper>
      <Image>
        <img src={image} alt="" />
      </Image>
    </SectionCard>
  );
};

export default TestimonialCard;
