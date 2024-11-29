import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 4vh;
`;

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: whitesmoke;
`;

interface ICarouselProps {
  $gap: number;
  $translate: number;
}

export const Carousel = styled.ol<ICarouselProps>`
  display: flex;
  gap: ${(props) => props.$gap}px;
  width: 100%;
  height: 50%;
  transition: transform 0.75s;
  transform: translate3d(-${(props) => props.$translate}px, 0, 0);
`;

export const ItemContainer = styled.li<{ $gap: number }>`
  flex: 0 0 calc(100% / 6 - ${(props) => props.$gap}px);
  width: calc(100% / 6 - ${(props) => props.$gap}px);
`;

export const ItemParent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 55.7047%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f2a65e;
  color: white;
  font-family: sans-serif;
`;

export const Button = styled.div<{ $position: "left" | "right" }>`
  position: fixed;
  left: ${(props) => props.$position === "left" && 0};
  right: ${(props) => props.$position === "right" && 0};
  width: 30px;
  height: 100%;
  background-color: teal;
`;
