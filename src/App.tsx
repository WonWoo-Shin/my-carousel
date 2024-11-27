import { useRef, useState } from "react";
import { Buttons, Carousel, Container, Item, Wrapper } from "./styles/style";

const itemLength = 14;
const items = Array.from({ length: itemLength }, (_, index) => index + 1);

const showItem = 6;
const remainItem = itemLength % showItem;
const maxIndex = Math.floor(itemLength / showItem);

const gap = 8;

export const App = () => {
  const [translate, setTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  const itemRef = useRef<HTMLLIElement>(null);

  const handleCarousel = (direction: "left" | "right") => {
    if (isTransition) return;

    const itemWidth = itemRef.current?.offsetWidth;
    if (!itemWidth) return;

    const totalTranslate = (itemWidth + gap) * (itemLength - showItem);
    const maxDistance = (itemWidth + gap) * showItem;

    // 스크롤 끝에서 스크롤을 막음
    const isAtEnd =
      direction === "right" ? translate === totalTranslate : translate === 0;
    if (isAtEnd) return;

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
        <Carousel
          $gap={gap}
          $translate={translate}
          onTransitionEnd={() => setIsTransition(false)}
        >
          {items.map((item) => (
            <Item ref={itemRef} key={item} $gap={gap} $showItem={showItem}>
              {item}
            </Item>
          ))}
        </Carousel>
        <Buttons>
          <button onClick={() => handleCarousel("left")}>◀</button>
          <button onClick={() => handleCarousel("right")}>▶</button>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default App;
