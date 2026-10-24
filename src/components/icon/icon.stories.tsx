import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';
import { ICON_MAP } from './base';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    name: { control: 'select', options: Object.keys(ICON_MAP) },
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    size: 'small',
    name: 'close'
  }
};