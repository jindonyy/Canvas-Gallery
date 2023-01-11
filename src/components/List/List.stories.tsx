import { ComponentStory } from '@storybook/react';

import { $ColumnList, $RowList } from '.';

import { $ColumnProduct, $RowProduct } from '../Product';

export default {
  title: 'common/ProductList',
  component: $ColumnList,
  subComponent: $RowList,
  args: {}
};

export const Column: ComponentStory<typeof $ColumnList> = () => (
  <$ColumnList>
    {Array(5)
      .fill(null)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <$RowProduct key={index} as="li">
          <$RowProduct.Image
            src="https://picsum.photos/id/0/5000/3333"
            alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
          />
        </$RowProduct>
      ))}
  </$ColumnList>
);

export const Row: ComponentStory<typeof $RowList> = args => (
  <$RowList {...args}>
    {Array(5)
      .fill(null)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <$ColumnProduct key={index} as="li">
          <$ColumnProduct.Image
            src="https://picsum.photos/id/0/5000/3333"
            alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
          />
        </$ColumnProduct>
      ))}
  </$RowList>
);
