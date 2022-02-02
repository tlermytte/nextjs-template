import Button from './Button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  components: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button />;
