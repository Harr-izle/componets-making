import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ trigger, delay, label, hasCheckbox, hasRadio, hasSearch, children }) => `
  <my-dropdown
    trigger="${trigger || 'click'}"
    delay="${delay || 300}"
    label="${label || 'Dropdown'}"
    has-checkbox="${hasCheckbox || false}"
    has-radio="${hasRadio || false}"
    has-search="${hasSearch || false}"
  >
    ${children || ''}
  </my-dropdown>
`;

const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'my-dropdown',
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'select', options: ['hover', 'click'] },
    },
    delay: {
      control: { type: 'number' },
    },
    label: {
      control: { type: 'text' },
    },
    hasCheckbox: { control: 'boolean' },
    hasRadio: { control: 'boolean' },
    hasSearch: { control: 'boolean' }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: Template,
  args: {
    trigger: 'click',
    delay: 300,
    label: 'Dropdown',
    children: `
      <div class="dropdown-item">
        <i>📝</i>
        Create New Document
      </div>
      <div class="dropdown-item">
        <i>📂</i>
        Open Project
      </div>
      <div class="dropdown-item">
        <i>💾</i>
        Save Changes
      </div>
    `
  },
};

export const WithHover: Story = {
  render: Template,
  args: {
    trigger: 'hover',
    delay: 0,
    label: 'Hover Menu',
    children: `
      <div class="dropdown-header">Hover Navigation</div>
      <div class="dropdown-item">Profile Settings</div>
      <div class="dropdown-item">Account Security</div>
      <div class="dropdown-item">Notifications</div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-item">Sign Out</div>
    `
  },
};

export const WithCheckbox: Story = {
  render: Template,
  args: {
    ...Default.args,
    hasCheckbox: true,
    children: `
      <label class="dropdown-item">
        <input type="checkbox"> Option 1
      </label>
      <label class="dropdown-item">
        <input type="checkbox"> Option 2
      </label>
    `
  },
};

export const WithRadio: Story = {
  render: Template,
  args: {
    ...Default.args,
    hasRadio: true,
    children: `
      <label class="dropdown-item">
        <input type="radio" name="options"> Option 1
      </label>
      <label class="dropdown-item">
        <input type="radio" name="options"> Option 2
      </label>
    `
  },
};

export const WithSearch: Story = {
  render: Template,
  args: {
    ...Default.args,
    hasSearch: true,
    children: `
      <div class="dropdown-search">
        <input type="search" placeholder="Search...">
      </div>
      <div class="dropdown-item">Searchable Item 1</div>
      <div class="dropdown-item">Searchable Item 2</div>
    `
  },
};
