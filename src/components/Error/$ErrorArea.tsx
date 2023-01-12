import styled, { css } from 'styled-components';

type $ErrorAreaProps = {
  size?: 'small' | 'medium' | 'large';
};

const sizeStyles = {
  small: {
    root: css`
      height: 20vw;
      max-height: 25rem;
    `,
    title: css`
      font-size: ${({ theme }) => theme.fonts.size.medium};
    `,
    description: css`
      margin-top: 0.8rem;
      font-size: ${({ theme }) => theme.fonts.size.small};
    `
  },
  medium: {
    root: css`
      height: 40vw;
      max-height: 40rem;
    `,
    title: css`
      font-size: ${({ theme }) => theme.fonts.size.xLarge};
    `,
    description: css`
      margin-top: 1rem;
      font-size: ${({ theme }) => theme.fonts.size.base};
    `
  },
  large: {
    root: css`
      height: calc(100vh - ${({ theme }) => theme.size.height.header});
    `,
    title: css`
      font-size: ${({ theme }) => theme.fonts.size.xxLarge};
    `,
    description: css`
      margin-top: 1.4rem;
      font-size: ${({ theme }) => theme.fonts.size.base};
    `
  }
};

const $ErrorAreaRoot = styled.div<$ErrorAreaProps>`
  position: relative;
  ${({ theme }) =>
    theme.mixins.flexBox({ justify: 'center', align: 'center', direction: 'column' })};
  ${({ size = 'medium' }) => sizeStyles[size].root};
`;

const $Title = styled.h2<$ErrorAreaProps>`
  ${({ size = 'medium' }) => sizeStyles[size].title};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const $Description = styled.p<$ErrorAreaProps>`
  ${({ size = 'medium' }) => sizeStyles[size].description};
  color: ${({ theme }) => theme.palette.neutral_dark};
`;

const $ErrorArea = Object.assign($ErrorAreaRoot, {
  Title: $Title,
  Description: $Description
});

export default $ErrorArea;
