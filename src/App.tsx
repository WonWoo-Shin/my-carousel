import { useState } from "react";
import {
  Buttons,
  Carousel,
  Container,
  Item,
  ItemContainer,
  ItemParent,
  Wrapper,
} from "./styles/style";
import { useMediaQuery } from "react-responsive";

const itemLength = 14;
const items = Array.from({ length: itemLength }, (_, index) => index + 1);

// 단위 : %
const padding = 3.125;
const gap = 0.375;
const itemWidth = 18.625;

export const App = () => {
  const [translate, setTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1416px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1040px)" });

  const showItem = isSmallScreen ? 4 : isMediumScreen ? 5 : 6;

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
      <Container $padding={padding}>
        <Carousel
          $gap={gap}
          $padding={padding}
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
