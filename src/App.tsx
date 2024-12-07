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
import { sliceArray } from "./sliceArray";

const itemLength = 21;
const items = Array.from({ length: itemLength }, (_, index) => index + 1);

// 단위 : em
const padding = 3.125;
const gap = 0.375;
const itemWidth = 18.625;
const oneBlock = itemWidth + gap;

export const App = () => {
  const [cloneItems, setCloneItems] = useState(items.slice(0, 13));

  const [carouselLocation, setCarouselLocation] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  const [isCarouselActive, setIsCarouselActive] = useState(false);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1416px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1040px)" });
  const showItem = isSmallScreen ? 4 : isMediumScreen ? 5 : 6;

  const handleCarousel = (direction: "left" | "right") => {
    if (isTransition) return;

    if (direction === "left" && !isCarouselActive) return;

    setIsTransition(true);
    setIsCarouselActive(true);

    const totalScrollableDistance = oneBlock * (itemLength - showItem);
    const maxScollableDistance = oneBlock * showItem;

    // 거리 계산
    const remainDistance =
      direction === "right"
        ? totalScrollableDistance - carouselLocation
        : -carouselLocation;
    const distance =
      direction === "right"
        ? Math.min(remainDistance, maxScollableDistance)
        : Math.max(remainDistance, -maxScollableDistance);

    // 스크롤 끝에서 연속 스크롤 적용
    const isAtEnd =
      direction === "right"
        ? carouselLocation === totalScrollableDistance
        : carouselLocation === 0;
    if (isAtEnd) {
      if (direction === "right") {
        setCarouselLocation(0);
        setTranslate((prev) => prev + maxScollableDistance);
      } else {
        setCarouselLocation(totalScrollableDistance);
        setTranslate((prev) => prev - maxScollableDistance);
      }
      return;
    }

    setCarouselLocation((prev) => prev + distance);
    setTranslate((prev) => prev + distance);
  };

  const transitionEnd = () => {
    setIsTransition(false);
    setCloneItems(() => {
      const copyItems = [...items];
      const startIndex = carouselLocation / oneBlock - showItem - 1;
      const endIndex = startIndex + showItem * 3 + 2;
      return sliceArray(copyItems, startIndex, endIndex);
    });
    setTranslate(oneBlock * showItem + oneBlock);
  };

  return (
    <Wrapper>
      <Container $padding={padding}>
        <Carousel
          $gap={gap}
          $padding={padding}
          $translate={translate}
          onTransitionEnd={transitionEnd}
          className={isTransition ? "" : "no-transition"}
        >
          {cloneItems.map((item, index) => (
            <ItemContainer key={index} $width={itemWidth}>
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
