import styled from "styled-components";

const Container = styled.div<{ $number: number }>`
  position: relative;
  padding-top: 2rem;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (max-width: 1000px) {
    border-bottom: ${(props) =>
      props.$number === 7 ? "3px solid #000" : "none"};

    border-left: ${(props) =>
      props.$number === 1 || props.$number === 2 ? "none" : "3px solid #000"};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Number = styled.div`
  width: 65px;
  height: 80px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid #000;

  border-radius: 50%;
`;

const Arrow = styled.div`
  width: 3px;
  height: 100%;
  background-color: #000;
`;

const ArrowWrapper = styled.div`
  padding-top: 2rem;
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const LeftBackground = styled.div<{ $number: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #e4e5de;

  @media (max-width: 1000px) {
    background-color: #fff804;

    background-color: ${(props) =>
      props.$number === 1 || props.$number === 2 ? "#e4e5de" : "#fff804"};
  }
`;

const RightBackground = styled.div<{ $number: number }>`
  position: absolute;
  right: 0;
  top: 0;

  width: 50%;
  height: 100%;
  background-color: #fff804;

  @media (max-width: 1000px) {
    background-color: ${(props) =>
      props.$number === 1 || props.$number === 2 ? "#e4e5de" : "#fff804"};
  }
`;

const ArrowEndComponent = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-top: 20px solid #000;
`;

const Divider = ({ number }: { number: number }) => {
  return (
    <Container $number={number}>
      <LeftBackground $number={number}></LeftBackground>
      <RightBackground $number={number}></RightBackground>
      <ArrowWrapper>
        <Number>{number}</Number>
        <Arrow></Arrow>
        <ArrowEndComponent></ArrowEndComponent>
      </ArrowWrapper>
    </Container>
  );
};

export default Divider;
