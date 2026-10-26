import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';
import { ICON_MAP } from './base';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  tags: ['autodocs'],
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: [
          'The `Icon` component renders an SVG icon from the icon registry.',
          '',
          '### Usage',
          '```tsx',
          'import { Icon } from "@/components/icon";',
          '',
          '// Basic usage',
          '<Icon name="home" />',
          '',
          '// With size and color',
          '<Icon name="close" size="large" color="rose" />',
          '```',
          '',
          `### Available icons\n${Object.keys(ICON_MAP).map((name) => `\`${name}\``).join(', ')}`,
        ].join('\n'),
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    name: { control: 'select', options: Object.keys(ICON_MAP) },
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const AllIcons: Story = {
  args: {
    size: 'medium',
    color: undefined,
  },
  argTypes: {
    name: { table: { disable: true } },
    color: { control: 'select', options: ['primary', 'secondary', 'rose'] },
  },
  render: ({ size, color }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 100px)', gap: '16px', textAlign: 'center' }}>
      {Object.keys(ICON_MAP).map((name) => (
        <div key={name} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          padding: '8px', borderRadius: '8px',
          backgroundColor: color === 'secondary' ? 'var(--color-icon-primary)' : undefined,
        }}>
          <Icon name={name as keyof typeof ICON_MAP} size={size} color={color} />
          <span style={{ fontSize: '12px', color: color === 'secondary' ? 'white' : undefined }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};