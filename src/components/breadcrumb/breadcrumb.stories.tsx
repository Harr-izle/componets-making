import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ items, background, type }) => `
  <div style="padding: 1rem;">
    <my-breadcrumb
      items='${JSON.stringify(items)}'
      background="${background || 'transparent'}"
      type="${type || 'default'}"
    ></my-breadcrumb>
  </div>
`;

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'my-breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    background: { 
      control: 'select',
      options: ['transparent', 'solid']
    },
    type: {
      control: 'select',
      options: ['default', 'header']
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: Template,
  args: {
    items: [
      { text: '🏠 Home', href: '/' },
      { text: '📚 Library', href: '/library' },
      { text: '📊 Data', href: '/library/data' },
    ]
  }
};

export const SolidBackground: Story = {
  render: Template,
  args: {
    background: 'solid',
    items: [
      { text: '🏠 Home', href: '/' },
      { text: '📚 Library', href: '/library' },
      { text: '📊 Data', href: '/library/data' },
    ]
  }
};

export const HeaderBreadcrumb: Story = {
    render: Template,
    args: {
      items: [
        { text: '🐙 GitHub', href: '/' },  
        { 
          text: '🌿 main',  
          dropdown: true,
          dropdownItems: [
            { text: 'develop', href: '/develop' },
            { text: 'feature', href: '/feature' },
          ]
        },
        { text: '📂 src', href: '/src' },  
      ]
    }
  };
  

export const WithDropdown: Story = {
    render: Template,
    args: {
      items: [
        { text: '🏠 Home', href: '/' },
        { 
          text: '🛍️ Products',
          dropdown: true,
          dropdownItems: [
            { text: '💻 Electronics', href: '/electronics' },
            { text: '👕 Clothing', href: '/clothing' },
            { text: '📚 Books', href: '/books' },
          ]
        },
        { text: '📦 Item', href: '/item' },
      ]
    }
  };
  

