import { ComponentStory } from '@storybook/react';

import { $ColumnItem, $RowItem } from '.';

export default {
  title: 'common/Image',
  component: $ColumnItem,
  subComponent: $RowItem
};

export const Column: ComponentStory<typeof $ColumnItem> = () => (
  <ul>
    <$ColumnItem>
      <$ColumnItem.Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
      />
      <$ColumnItem.Title>Alejandro Escamilla</$ColumnItem.Title>
    </$ColumnItem>
  </ul>
);

export const Row: ComponentStory<typeof $RowItem> = () => (
  <ul>
    <$RowItem>
      <$RowItem.Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
      />
      <$RowItem.Title>Alejandro Escamilla</$RowItem.Title>
    </$RowItem>
  </ul>
);
