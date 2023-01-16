# 🩻 Hueron

- 이미지 갤러리를 구현한 휴런 과제 프로젝트 입니다.
- 작업 기간: 2023.01.10 ~ 2023.01.16

<br>

## 🛠 Tools

### react

- JSX 문법을 사용하여 HTML과 JavaScript를 함께 사용할 수 있다.
- 컴포넌트로 상태관리를 할 수 있어 복잡한 UI도 효과적으로 구성할 수 있다.
- 가상 DOM을 사용하여 변경된 부분만 브라우저의 DOM에 업데이트하여 효율적이다.

### styled-components

- 컴포넌트의 props를 참조할 수 있으며, props의 값에 따라 스타일을 다르게 코딩 할 수 있다.
- 자유로운 CSS 커스텀 컴포넌트를 만들 수 있다.
- Scss라이브러리 설치 없이 Scss 문법을 사용할 수 있다.

### react-query

- Server state, Client state를 분리할 수 있다.
- fetch 옵션을 원하는대로 설정하여 네트워크 통신을 최소한으로 아끼고 메모리 성능이 향상된다.
- 데이터 캐싱이 가능하여 사용자가 어플리케이션이 즉각 반응하고 더 빠르다고 느끼게 성능이 개선된다.

### storybook

- UI 컴포넌트를 독립적인 환경에서 개발을 돕는 오픈소스 툴이다.
- React, Vue, Angular에서도 지원하며 다양한 에드온(후킹 : 정상적인 동작을 가로채는 동작 )을 기반으로 UI 컴포넌트를 쉽게 테스트 할 수 있도록 돕는다.

<br>

## 📂 Directory

```
📂 src
├── App.tsx
├── 📂 api
│   ├── core.ts
│   └── gallery.ts
├── 📂 components
│   ├── 📂 primitives
│   │   └── 📂 Error
│   │       └── ApiErrorBoundary.tsx
│   └── 📂 styled
│       ├── 📂 Error
│       │   ├── ApiErrorBoundary.tsx
│       │   ├── Error.stories.tsx
│       │   └── ErrorArea.tsx
│       ├── 📂 Item
│       │   ├── ColumnItem.tsx
│       │   ├── Item.stories.tsx
│       │   ├── RowItem.tsx
│       │   └── index.tsx
│       ├── 📂 List
│       │   ├── ColumnList.tsx
│       │   ├── List.stories.tsx
│       │   ├── RowList.tsx
│       │   └── index.tsx
│       ├── 📂 Loading
│       │   ├── Loading.stories.tsx
│       │   ├── LoadingArea.tsx
│       │   └── LoadingSpinner.tsx
│       ├── 📂 Logo
│       │   ├── Logo.stories.tsx
│       │   └── index.tsx
│       ├── 📂 PageLayout
│       │   ├── PageLayout.stories.tsx
│       │   └── index.tsx
│       └── 📂 Title
│           ├── Title.stories.tsx
│           └── index.tsx
├── 📂 hooks
│   └── useThrottle.ts
├── index.tsx
├── 📂 layout
│   ├── 📂 Header
│   │   ├── GNB.tsx
│   │   └── index.tsx
│   ├── 📂 Main
│   │   └── index.tsx
│   └── index.tsx
├── 📂 pages
│   ├── 📂 GalleryDetailPage
│   │   ├── 📂 GalleryDetail
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── 📂 GalleryPage
│   │   ├── 📂 Gallery
│   │   │   ├── Item.tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── 📂 HomePage
│   │   └── index.tsx
│   ├── 📂 NotFoundPage
│   │   └── index.tsx
│   └── Router.tsx
├── 📂 queries
│   └── useFetchGallery.ts
├── styled.d.ts
├── 📂 styles
│   ├── GlobalStyle.tsx
│   ├── commonSX.ts
│   ├── reset.ts
│   └── theme
│       ├── colors.ts
│       ├── fonts.ts
│       ├── index.ts
│       ├── mixins.ts
│       ├── palette.ts
│       ├── size.ts
│       └── zIndex.ts
└── 📂 utils
    └── unit.ts
```

<br>

## 🕹 실행 방법

1. 터미널에 `npm install`을 입력하여 node modules를 설치한다.

```
npm install
```

2. 터미널에 `npm run start`를 입력한다.

```
npm run start
```

3. [http://localhost:3000](http://localhost:3000) 에 접속한다.

- home page - [http://localhost:3000](http://localhost:3000)
- gallery page - [http://localhost:3000/gallery](http://localhost:3000/gallery)
- gallery detail page - [http://localhost:3000/gallery](http://localhost:3000/gallery)/:imageId
