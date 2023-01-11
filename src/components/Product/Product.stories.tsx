import { ComponentStory } from '@storybook/react';
import { css } from 'styled-components';

import { $ColumnProduct, $RowProduct } from '.';

export default {
  title: 'common/Product',
  component: $ColumnProduct,
  subComponent: $RowProduct
};

export const Column: ComponentStory<typeof $ColumnProduct> = () => (
  <ul>
    <$ColumnProduct
      css={css`
        width: 30%;
      `}
    >
      <$ColumnProduct.Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
      />
    </$ColumnProduct>
  </ul>
);

export const Row: ComponentStory<typeof $RowProduct> = () => (
  <ul>
    <$RowProduct>
      <$RowProduct.Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
      />
    </$RowProduct>
  </ul>
);
