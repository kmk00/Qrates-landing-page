import styled from "styled-components";

const P = styled.p`
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Section = styled.section`
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 1rem;
  padding: 6rem 2rem;
  text-align: center;
  color: #fff;
`;

const Slogan = () => {
  return (
    <Section>
      <P>You make music.</P>
      <P>We do the rest.</P>
    </Section>
  );
};

export default Slogan;
