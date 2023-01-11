import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ProductImageProps = {
  src: string;
  alt: string;
  children?: ReactNode;
};

const ColumnProductRoot = styled.div``;

const ProductImage = ({ src, alt, children, ...restProps }: ProductImageProps) => (
  <div
    css={css`
      position: relative;
      padding-top: 100%;
      overflow: hidden;
    `}
    {...restProps}
  >
    <img
      src={src}
      alt={alt}
      css={css`
        ${({ theme }) => theme.mixins.position('absolute', { top: '50%', left: '50%' })}
        transform: translate(-50%, -50%);
      `}
    />
    {children}
  </div>
);

const $ColumnProduct = Object.assign(ColumnProductRoot, {
  Image: ProductImage
});

export default $ColumnProduct;
