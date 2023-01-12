import { ComponentStory, ComponentMeta } from '@storybook/react';

import $Title from '.';

export default {
  title: 'common/Title',
  component: $Title,
  args: {
    variant: 'h1'
  }
} as ComponentMeta<typeof $Title>;

export const Default: ComponentStory<typeof $Title> = args => <$Title {...args}>Home Page</$Title>;
