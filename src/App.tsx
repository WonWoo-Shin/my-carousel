import styled from "styled-components";
import { ListCarousel } from "./components/ListCarousel";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 1vw;
`;

const Title = styled.div`
  margin-bottom: 70px;
  h1 {
    font-size: 6em;
    line-height: 3.5em;
  }
`;

const CountButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #48c78e;
  border: none;
  border-radius: 50%;
  span {
    color: #ffffff;
    font-size: 30px;
  }
`;

const CountText = styled.span`
  margin: 0 10px;
  font-size: 20px;
`;

export const App = () => {
  const [dataCount, setDataCount] = useState(6);
  const data = Array.from({ length: dataCount }, (_, index) => index + 1);

  return (
    <Container>
      <Title>
        <h1>
          {"<"} My Carousel {">"}
        </h1>
      </Title>
      <ListCarousel data={data} />
      <CountButtons>
        <CountButton onClick={() => setDataCount((prev) => (prev -= 1))}>
          <span>-</span>
        </CountButton>
        <CountText>{dataCount}</CountText>
        <CountButton onClick={() => setDataCount((prev) => (prev += 1))}>
          <span>+</span>
        </CountButton>
      </CountButtons>
    </Container>
  );
};
