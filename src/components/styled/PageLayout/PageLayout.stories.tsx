import { ComponentStory, ComponentMeta } from '@storybook/react';

import $PageLayout from '.';

export default {
  title: 'Layouts/PageLayout',
  component: $PageLayout,
  args: {}
} as ComponentMeta<typeof $PageLayout>;

export const Default: ComponentStory<typeof $PageLayout> = args => (
  <$PageLayout css={{ border: '1px solid #ccc' }} {...args}>
    <p>Hello World</p>
  </$PageLayout>
);
