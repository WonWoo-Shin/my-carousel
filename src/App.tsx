import { useEffect, useRef, useState } from "react";
import {
  Button,
  Carousel,
  Container,
  Item,
  ItemContainer,
  ItemParent,
  Wrapper,
} from "./styles/style";

const itemLength = 13;
const items = Array.from({ length: itemLength }, (_, index) => index + 1);
const showItem = 6;

const gap = 8;

export const App = () => {
  const [translate, setTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  const itemRef = useRef<HTMLDivElement>(null);

  const handleCarousel = (direction: "left" | "right") => {
    if (isTransition) return;

    const itemElement = itemRef.current;
    const itemWidth = itemElement?.getBoundingClientRect().width;
    if (!itemWidth) return;

    const totalTranslate = (itemWidth + gap) * (itemLength - showItem);
    const maxDistance = (itemWidth + gap) * showItem;

    // 스크롤 끝에서 막음
    const isAtEnd =
      direction === "right" ? translate === totalTranslate : translate === 0;
    if (isAtEnd) return;

    // 거리 계산
    const remainDistance =
      direction === "right" ? totalTranslate - translate : -translate;
    const distance =
      direction === "right"
        ? Math.min(remainDistance, maxDistance)
        : Math.max(remainDistance, -maxDistance);

    setIsTransition(true);
    setTranslate((prev) => prev + distance);
  };

  return (
    <Wrapper>
      <Container>
        {/* <Button $position="left" onClick={() => handleCarousel("left")}>
          ◀
        </Button> */}
        <Carousel
          $gap={gap}
          $translate={translate}
          onTransitionEnd={() => setIsTransition(false)}
        >
          {items.map((item) => (
            <ItemContainer key={item} $gap={gap}>
              <ItemParent>
                <Item ref={itemRef}>{item}</Item>
              </ItemParent>
            </ItemContainer>
          ))}
        </Carousel>
        {/* <Button $position="right" onClick={() => handleCarousel("right")}>
          ▶
        </Button> */}
      </Container>
    </Wrapper>
  );
};

export default App;
