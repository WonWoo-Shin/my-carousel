# Custom Carousel

윈도우 창 크기만큼 컨텐츠를 표시하고, 이동하는 넷플릭스 스타일 캐러셀

### 🔧 개발 환경

- 프로그래밍 언어 : <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>

- 프레임워크 : <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>

- 번들러 : <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white"/>

- 스타일링 : <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white"/>

### 📌 주요 기능

- **일정한 이동 거리 유지:** 캐러셀이 이동할 때 항상 정해진 개수 만큼 이동

- **예외적인 마지막 요소 이동 처리:** 마지막에 남은 요소가 1개뿐이라면 1개 분량만 이동

- **되돌아올 때도 동일한 거리 유지:** 일반적인 캐러셀과 달리, 다시 반대 방향으로 이동할 때도 원래 분량만큼 이동하여 일관성 유지

![일관성](https://github.com/user-attachments/assets/4d991d89-49b3-443c-a512-e1370992ef78)

- **반응형 디자인:** 브라우저 창 크기에 따른 캐러셀의 표시 방법, 슬라이드 애니메이션 적용
  ![반응형](https://github.com/user-attachments/assets/300c9986-03ca-4f50-a2f8-1a587f700df0)

### ⌨ 주요 코드

- 화면에 표시할 컨텐츠 개수 설정

```ts
const isMediumScreen = useMediaQuery({ query: "(max-width: 1400px)" });
const isSmallScreen = useMediaQuery({ query: "(max-width: 1100px)" });

const showItem = isSmallScreen ? 4 : isMediumScreen ? 5 : 6;
```

- 이동 거리 계산

```ts
const [carouselLocation, setCarouselLocation] = useState(0);

// 남은 거리 계산
// 전체 개수 - 현재 위치 - 화면에 보이는 개수(제외)
const remainLocatoin =
  direction === "right"
    ? data.length - carouselLocation - showItem
    : -carouselLocation;

// 실제 이동 거리 계산
const distance =
  direction === "right"
    ? Math.min(remainLocatoin, showItem)
    : Math.max(remainLocatoin, -showItem);
```

### 📕 Demo

[깃허브 페이지](https://wonwoo-shin.github.io/my-carousel/){: target="_blank"}
