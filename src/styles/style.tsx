import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 101vh;
  /* font-size: 0.82646vw; */
`;

// 1 vw = 1920px
//      = 1904px
// 1em  = 19.2px
// 100em = 화면 1개

export const Container = styled.div<{ $padding: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0px ${(props) => props.$padding}%;
`;

interface ICarouselProps {
  $gap: number;
  $padding: number;
  $translate: number;
}

export const Carousel = styled.ol<ICarouselProps>`
  display: flex;
  gap: ${(props) => props.$gap}%;
  width: 100%;
  transition: transform 0.75s;
  transform: translate3d(-${(props) => props.$translate}%, 0, 0);
  /* transform: translateX(-114em); */
`;

export const ItemContainer = styled.li<{ $width: number }>`
  flex: 0 0 ${(props) => props.$width}%;
  /* flex: 0 0 10em; */
`;

export const ItemParent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
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
  font-size: 2em;
  font-family: sans-serif;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
