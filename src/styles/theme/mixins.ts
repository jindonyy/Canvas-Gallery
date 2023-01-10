import { css } from 'styled-components';

type Flex = {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-end' | 'flex-start' | 'center';
  gap?: string | number;
};

type Position = 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';

type Coordinate = {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
};

const mixins = {
  flexBox: ({ direction, justify, align, gap }: Flex) => css`
    display: flex;
    ${direction && `flex-direction: ${direction}`};
    ${justify && `justify-content: ${justify}`};
    ${align && `align-items: ${align}`};
    ${gap && `gap: ${gap}`};
  `,

  position: (position: Position, { top, bottom, left, right }: Coordinate) => css`
    position: ${position};
    ${top && `top: ${top}`};
    ${bottom && `bottom: ${bottom}`};
    ${left && `left: ${left}`};
    ${right && `right: ${right}`};
  `
};

export default mixins;
