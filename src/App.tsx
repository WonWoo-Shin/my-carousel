import { useEffect, useRef, useState } from "react";
import {
  Buttons,
  Carousel,
  Container,
  Item,
  ItemContainer,
  ItemParent,
  Wrapper,
} from "./styles/style";

const itemLength = 14;
const items = Array.from({ length: itemLength }, (_, index) => index + 1);
const showItem = 6;

// 단위 : em
const gap = 0.5;
const padding = 3.75;
const itemWidth = (100 - (padding * 2 + gap * (showItem - 1))) / showItem;

export const App = () => {
  const [translate, setTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  const handleCarousel = (direction: "left" | "right") => {
    if (isTransition) return;

    const totalScrollableDistance = (itemWidth + gap) * (itemLength - showItem);
    const maxScollableDistance = (itemWidth + gap) * showItem;

    // 스크롤 끝에서 막음
    const isAtEnd =
      direction === "right"
        ? translate === totalScrollableDistance
        : translate === 0;
    if (isAtEnd) return;

    console.log(maxScollableDistance);

    // 거리 계산
    const remainDistance =
      direction === "right" ? totalScrollableDistance - translate : -translate;
    const distance =
      direction === "right"
        ? Math.min(remainDistance, maxScollableDistance)
        : Math.max(remainDistance, -maxScollableDistance);

    setIsTransition(true);
    setTranslate((prev) => prev + distance);
  };

  return (
    <Wrapper>
      <Container>
        <Carousel
          $gap={gap}
          $translate={translate}
          onTransitionEnd={() => setIsTransition(false)}
        >
          {items.map((item) => (
            <ItemContainer key={item} $width={itemWidth}>
              <ItemParent>
                <Item>{item}</Item>
              </ItemParent>
            </ItemContainer>
          ))}
        </Carousel>
      </Container>
      <Buttons>
        <button onClick={() => handleCarousel("left")}>{"<"}</button>
        <button onClick={() => handleCarousel("right")}>{">"}</button>
      </Buttons>
    </Wrapper>
  );
};

export default App;
