import { useEffect, useState } from "react";
import { sliceArray } from "../sliceArray";
import {
  Carousel,
  Container,
  Item,
  ItemContainer,
  ItemParent,
} from "../styles/style";
import { CarouselButton } from "./CarouselButton";
import { useMediaQuery } from "react-responsive";

export const ListCarousel = ({ data }: { data: any[] }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const [carouselLocation, setCarouselLocation] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1400px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  // showItem = 넘어가는 스크롤 개수 / 화면에 표시하는 개수
  const showItem = isSmallScreen ? 4 : isMediumScreen ? 5 : 6;
  const itemCount = data.length;

  const [cloneItems, setCloneItems] = useState<any[]>([]);

  //아이템 개수가 화면에 표시하는 개수보다 많은 경우
  const [isScreenOver, setIsScreenOver] = useState(itemCount > showItem);

  const itemWidth = 100 / showItem;

  const adjustItem = () => {
    setCloneItems(() => {
      const newArr = [...data];
      const startIndex = carouselLocation - showItem - 1;
      const endIndex = carouselLocation + showItem * 2 + 1;
      return sliceArray(newArr, startIndex, endIndex);
    });
    setTranslate((showItem + 1) * itemWidth);
  };

  const handleCarousel = (direction: "left" | "right") => {
    if (isTransition) return;

    if (direction === "left" && !isCarouselActive) return;

    setIsTransition(true);

    // 한번에 이동하는 translate 값
    const distanceToScroll = showItem * itemWidth;

    // 남은 거리 계산
    const remainLocatoin =
      direction === "right"
        ? data.length - carouselLocation - showItem
        : -carouselLocation;

    // 실제 이동 거리 계산
    const distance =
      direction === "right"
        ? Math.min(remainLocatoin, showItem)
        : Math.max(remainLocatoin, -showItem);

    // 스크롤 끝에서 무한 스크롤 적용
    if (remainLocatoin === 0) {
      if (direction === "right") {
        setCarouselLocation(0);
        setTranslate((prev) => prev + distanceToScroll);
      } else {
        setCarouselLocation(data.length - showItem);
        setTranslate((prev) => prev - distanceToScroll);
      }
      return;
    }

    setCarouselLocation((prev) => prev + distance);
    setTranslate((prev) => prev + distance * itemWidth);
  };

  const transitionEnd = () => {
    setIsCarouselActive(true);
    setIsTransition(false);
    adjustItem();
  };

  //showItem값이 변경된 경우 처리 내용
  useEffect(() => {
    if (showItem >= itemCount) {
      setCloneItems([...data]);
      setTranslate(0);
      setIsCarouselActive(false);
      setIsScreenOver(false);
      return;
    }

    setIsScreenOver(itemCount > showItem);

    if (isCarouselActive) {
      adjustItem();
    } else {
      const renderCount = showItem * 2 + 1;
      const sliceEndIndex =
        itemCount > renderCount
          ? renderCount
          : itemCount > showItem
          ? itemCount + 1
          : itemCount;
      setCloneItems(sliceArray(data, 0, sliceEndIndex));
      setTranslate(0);
    }
  }, [showItem]);

  return (
    <Container
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {isCarouselActive && isScreenOver && (
        <CarouselButton
          handleCarousel={handleCarousel}
          direction={"left"}
          isMouseOver={isMouseOver}
        />
      )}
      <Carousel
        $translate={translate}
        onTransitionEnd={transitionEnd}
        className={isTransition ? "" : "no-transition"}
      >
        {cloneItems.map((item, index) => (
          <ItemContainer $itemWidth={itemWidth} key={index}>
            <ItemParent>
              <Item>{item}</Item>
            </ItemParent>
          </ItemContainer>
        ))}
      </Carousel>
      {isScreenOver && (
        <CarouselButton
          handleCarousel={handleCarousel}
          direction={"right"}
          isMouseOver={isMouseOver}
        />
      )}
    </Container>
  );
};
