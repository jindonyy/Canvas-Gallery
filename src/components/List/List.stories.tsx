import { ComponentStory } from '@storybook/react';

import { $ColumnList, $RowList } from '.';

import { $ColumnImage, $RowImage } from '../Image';

export default {
  title: 'common/List',
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
        <$RowImage key={index} as="li">
          <$RowImage.Image
            src="https://picsum.photos/id/0/5000/3333"
            alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
          />
          <$RowImage.Author>Alejandro Escamilla</$RowImage.Author>
        </$RowImage>
      ))}
  </$ColumnList>
);

export const Row: ComponentStory<typeof $RowList> = args => (
  <$RowList {...args}>
    {Array(5)
      .fill(null)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <$ColumnImage key={index} as="li">
          <$ColumnImage.Image
            src="https://picsum.photos/id/0/5000/3333"
            alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 상품 사진"
          />
          <$ColumnImage.Author>Alejandro Escamilla</$ColumnImage.Author>
        </$ColumnImage>
      ))}
  </$RowList>
);
