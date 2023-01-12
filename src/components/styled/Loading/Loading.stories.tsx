import { ComponentStory, ComponentMeta } from '@storybook/react';

import $LoadingArea from './LoadingArea';

export default {
  title: 'common/LoadingArea',
  component: $LoadingArea,
  args: { size: 'medium' }
} as ComponentMeta<typeof $LoadingArea>;

export const Default: ComponentStory<typeof $LoadingArea> = args => (
  <$LoadingArea {...args}>
    <$LoadingArea.Loader />
  </$LoadingArea>
);
