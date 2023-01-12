import { ComponentStory, ComponentMeta } from '@storybook/react';

import $ErrorArea from './ErrorArea';

export default {
  title: 'common/ErrorArea',
  component: $ErrorArea,
  args: { size: 'large' }
} as ComponentMeta<typeof $ErrorArea>;

export const Default: ComponentStory<typeof $ErrorArea> = args => (
  <$ErrorArea {...args}>
    <$ErrorArea.Title {...args}>잠시 후 다시 시도해주세요.</$ErrorArea.Title>
    <$ErrorArea.Description {...args}>요청사항을 받아오는데 실패했습니다.</$ErrorArea.Description>
  </$ErrorArea>
);
