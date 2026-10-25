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

export const AllIcons: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 100px)', gap: '16px', textAlign: 'center' }}>
      {Object.keys(ICON_MAP).map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon name={name as keyof typeof ICON_MAP} />
          <span style={{ fontSize: '12px' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};