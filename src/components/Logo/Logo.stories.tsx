import { ComponentStory, ComponentMeta } from '@storybook/react';

import $Logo from '.';

export default {
  title: 'common/Logo',
  component: $Logo,
  args: {}
} as ComponentMeta<typeof $Logo>;

export const Default: ComponentStory<typeof $Logo> = args => <$Logo {...args} />;
