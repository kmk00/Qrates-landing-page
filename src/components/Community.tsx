import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleButton = styled.button`
  border: 2px solid #000;
  font-size: 20px;
  padding: 0.6rem;
  background-color: transparent;
  color: #000;
`;

const H2 = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-top: 2rem;
`;

const Text = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
`;

const Button = styled.button`
  border: 2px solid #000;
  font-size: 20px;
  padding: 0.6rem 2rem;
  background-color: transparent;
  color: #000;
  margin-top: 2rem;
  cursor: pointer;

  border-radius: 25px;
`;

const Community = () => {
  return (
    <Section>
      <Wrapper>
        <TitleButton>COMMUNITY</TitleButton>
        <H2>Join a growing community.</H2>
        <Text>
          We're building a home for the next generation vinyl lovers and
          cassette junkies. Get in front of fans, connect with artists, labels
          and stores.
        </Text>
        <Button>READ MORE STORIES</Button>
      </Wrapper>
    </Section>
  );
};

export default Community;
