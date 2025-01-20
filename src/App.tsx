import styled from "styled-components";
import { ListCarousel } from "./components/ListCarousel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const App = () => {
  const data = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <Container>
      <ListCarousel data={data} />
    </Container>
  );
};
