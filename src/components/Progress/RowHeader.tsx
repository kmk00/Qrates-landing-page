import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 100%;
`;

const TitleButton = styled.button`
  border: 2px solid #000;
  font-size: 20px;
  padding: 0.6rem;
  background-color: #fff;
  color: #000;
`;

const H2 = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
`;

interface RowHeaderProps {
  text: string;
  titleButton?: string;
  h2: string;
  icon?: string;
}

const Image = styled.div`
  margin-top: 2rem;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    height: auto;
  }
`;

const RowHeader = ({ text, titleButton, h2, icon }: RowHeaderProps) => {
  return (
    <Header>
      {titleButton && <TitleButton>{titleButton}</TitleButton>}
      <H2>{h2}</H2>
      <Text>{text}</Text>

      {icon && (
        <Image>
          <img src={icon} alt="icon" />
        </Image>
      )}
    </Header>
  );
};

export default RowHeader;
