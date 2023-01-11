import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type $ProductImageProps = {
  src: string;
  alt: string;
  children?: ReactNode;
};

const $RowProductRoot = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ gap: '3rem' })}
  padding: 2rem;
`;

const $ProductImage = ({ src, alt, children, ...restProps }: $ProductImageProps) => (
  <div
    css={css`
      width: 12rem;
    `}
    {...restProps}
  >
    <img
      src={src}
      alt={alt}
      css={css`
        margin: 0 auto;
      `}
    />
    {children}
  </div>
);

const $RowProduct = Object.assign($RowProductRoot, {
  Image: $ProductImage
});

export default $RowProduct;
