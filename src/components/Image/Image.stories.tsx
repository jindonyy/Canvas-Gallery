import { ComponentStory } from '@storybook/react';

import { $ColumnImage, $RowImage } from '.';

export default {
  title: 'common/Image',
  component: $ColumnImage,
  subComponent: $RowImage
};

export const Column: ComponentStory<typeof $ColumnImage> = () => (
  <ul>
    <$ColumnImage>
      <$ColumnImage.Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
      />
      <$ColumnImage.Author>Alejandro Escamilla</$ColumnImage.Author>
    </$ColumnImage>
  </ul>
);

export const Row: ComponentStory<typeof $RowImage> = () => (
  <ul>
    <$RowImage>
      <$RowImage.Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
      />
      <$RowImage.Author>Alejandro Escamilla</$RowImage.Author>
    </$RowImage>
  </ul>
);
