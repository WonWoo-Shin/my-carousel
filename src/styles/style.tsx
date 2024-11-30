import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
  font-size: 1vw;
`;

// 1 vw = 1920px
//      = 1904px
// 1em  = 19.2px
// 100em = 화면 1개

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

interface ICarouselProps {
  $gap: number;
  $translate: number;
}

export const Carousel = styled.ol<ICarouselProps>`
  display: flex;
  gap: ${(props) => props.$gap}em;
  width: 100%;
  padding: 0px 3.75em;
  transition: transform 0.75s;
  transform: translate3d(-${(props) => props.$translate}%, 0, 0);
`;

export const ItemContainer = styled.li<{ $width: number }>`
  flex: 0 0 ${(props) => props.$width}em;
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
  font-family: sans-serif;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
