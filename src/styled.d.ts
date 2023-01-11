import { Theme } from 'styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme>;
  }
}
