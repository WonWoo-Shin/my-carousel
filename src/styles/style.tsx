import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 var(--carousel-padding);
  font-size: 1vw;
`;

interface ICarouselProps {
  $translate: number;
}

export const Carousel = styled.ol<ICarouselProps>`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  transition: transform 0.75s;
  transform: translate3d(-${(props) => props.$translate}%, 0, 0);
  &.no-transition {
    transition: none;
  }
`;

export const ItemContainer = styled.li<{ $itemWidth: number }>`
  flex: 0 0 ${(props) => props.$itemWidth}%;
  padding: 0 var(--carousel-gap);
`;

export const ItemParent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

export const Item = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background-color: #48c78e;
  color: #ffffff;
  font-size: 2em;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: calc(var(--carousel-padding) - var(--carousel-gap));
  height: 100%;
  z-index: 1;
  &.left {
    left: 0;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
  &.right {
    right: 0;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  svg {
    width: 1.7em;
    height: 1.7em;
    color: var(--arrow-color);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    svg {
      color: #fff;
    }
  }
`;
