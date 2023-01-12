import { ComponentStory, ComponentMeta } from '@storybook/react';

import $LoadingSpinner from '.';

export default {
  title: 'common/LoadingSpinner',
  component: $LoadingSpinner,
  args: {}
} as ComponentMeta<typeof $LoadingSpinner>;

export const Default: ComponentStory<typeof $LoadingSpinner> = args => (
  <$LoadingSpinner {...args} />
);
