import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Button',
  component: 'my-button',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'alternative', 'dark', 'light', 'green', 'red', 'yellow', 'purple']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    outline: { control: 'boolean' },
    social: {
      control: 'select',
      options: ['facebook', 'twitter', 'google', 'linkedin', 'github']
    },
    pill: { control: 'boolean' },
    iconOnly: { control: 'boolean' }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: () => `
    <my-button name="Default Button" variant="default"></my-button>
  `
};

export const Variant: Story = {
  render: () => `
    <my-button name="Alternative Button" variant="alternative"></my-button>
    <my-button name="Dark Button" variant="dark"></my-button>
    <my-button name="Light Button" variant="light"></my-button>
    <my-button name="Green Button" variant="green"></my-button>
    <my-button name="Red Button" variant="red"></my-button>
    <my-button name="Yellow Button" variant="yellow"></my-button>
    <my-button name="Purple Button" variant="purple"></my-button>
  `
};

export const Sizes: Story = {
  render: () => `
    <my-button name="Extra Small" size="xs"></my-button>
    <my-button name="Small" size="sm"></my-button>
    <my-button name="Medium" size="md"></my-button>
    <my-button name="Large" size="lg"></my-button>
    <my-button name="Extra Large" size="xl"></my-button>
  `
};

export const Outline: Story = {
  render: () => `
    <my-button name="Default Outline" variant="default" outline="true"></my-button>
    <my-button name="Alternative Outline" variant="alternative" outline="true"></my-button>
    <my-button name="Dark Outline" variant="dark" outline="true"></my-button>
    <my-button name="Light Outline" variant="light" outline="true"></my-button>
    <my-button name="Green Outline" variant="green" outline="true"></my-button>
    <my-button name="Red Outline" variant="red" outline="true"></my-button>
    <my-button name="Purple Outline" variant="purple" outline="true"></my-button>
  `
};

export const Social: Story = {
  render: () => `
    <my-button name="Facebook" social="facebook"></my-button>
    <my-button name="Twitter" social="twitter"></my-button>
    <my-button name="Google" social="google"></my-button>
    <my-button name="LinkedIn" social="linkedin"></my-button>
    <my-button name="GitHub" social="github"></my-button>
  `
};

export const IconButtons: Story = {
  render: () => `
    <my-button name="Like" iconOnly="true">
      <span slot="icon">👍</span>
    </my-button>
    <my-button name="Share" variant="purple" iconOnly="true">
      <span slot="icon">📤</span>
    </my-button>
    <my-button name="Delete" variant="red" iconOnly="true">
      <span slot="icon">🗑️</span>
    </my-button>
  `
};

export const Pills: Story = {
  render: () => `
    <my-button name="Default Pill" pill="true"></my-button>
    <my-button name="Alternative Pill" variant="alternative" pill="true"></my-button>
    <my-button name="Dark Pill" variant="dark" pill="true"></my-button>
    <my-button name="Light Pill" variant="light" pill="true"></my-button>
    <my-button name="Red Pill" variant="red" pill="true"></my-button>
    <my-button name="Yellow Pill" variant="yellow" pill="true"></my-button>
    <my-button name="Green Pill" variant="green" pill="true"></my-button>
    <my-button name="Purple Pill" variant="purple" pill="true"></my-button>
    <my-button name="Icon Pill" variant="light" pill="true" iconOnly="true">
      <span slot="icon">❤️</span>
    </my-button>
  `
};
