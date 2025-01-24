import styled from "styled-components";
import { ListCarousel } from "./components/ListCarousel";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CountInput = styled.input`
  height: 50px;
  margin-top: 20px;
  font-size: 30px;
`;

export const App = () => {
  const [dataCount, setDataCount] = useState(6);
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setDataCount(Number(value));
  };
  const data = Array.from({ length: dataCount }, (_, index) => index + 1);

  return (
    <Container>
      <ListCarousel data={data} />
      <CountInput
        type="number"
        defaultValue={dataCount}
        min="1"
        onChange={onInputChange}
      />
    </Container>
  );
};
