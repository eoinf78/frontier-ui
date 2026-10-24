import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {control: 'select'}
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'click me'
  }
};

export const AsChildLink: Story = {
  args: {
    variant: 'text',
    asChild: true,
    children: <a href='https://google.com.au/' target='_blank'>Go to google</a>
  }
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: "Back Home",
    icon: 'home'
  }
};
