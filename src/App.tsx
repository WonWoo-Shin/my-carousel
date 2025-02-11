import styled from "styled-components";
import { ListCarousel } from "./components/ListCarousel";
import { useState } from "react";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: "Space Grotesk", serif;
  font-size: 1vw;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  margin-bottom: 50px;
  height: 400px;
  h1 {
    display: block;
    font-size: 6em;
    margin-bottom: 70px;
  }
`;

const LinkButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  font-family: BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  transition: border-color 0.2s;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    border-color: #b5b5b5;
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
        <LinkButton
          href="https://github.com/WonWoo-Shin/my-carousel"
          target="_blank"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>GitHub</span>
        </LinkButton>
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
