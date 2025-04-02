import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ header, description, imageUrl, buttonText, linkText, linkUrl, horizontal, isProfile, hasForm }) => `
  <my-card
    header="${header || ''}"
    description="${description || ''}"
    image-url="${imageUrl || ''}"
    button-text="${buttonText || ''}"
    link-text="${linkText || ''}"
    link-url="${linkUrl || ''}"
    horizontal="${horizontal || false}"
    is-profile="${isProfile || false}"
    has-form="${hasForm || false}"
  ></my-card>
`;

const meta: Meta = {
  title: 'Components/Card',
  component: 'my-card',
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    buttonText: { control: 'text' },
    linkText: { control: 'text' },
    linkUrl: { control: 'text' },
    horizontal: { control: 'boolean' },
    isProfile: { control: 'boolean' },
    hasForm: { control: 'boolean' }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: Template,
  args: {
    header: 'Default Card',
    description: 'This is a simple card with a header and description.',
  },
};

export const WithButton: Story = {
  render: Template,
  args: {
    header: 'Card with Button',
    description: 'This card includes an action button.',
    buttonText: 'Click Me',
  },
};

export const WithLink: Story = {
  render: Template,
  args: {
    header: 'Card with Link',
    description: 'This card includes a CTA link.',
    linkText: 'Learn More',
    linkUrl: '#',
  },
};

export const WithImage: Story = {
  render: Template,
  args: {
    header: 'Card with Image',
    description: 'This card includes an image.',
    imageUrl: 'https://picsum.photos/400/200',
  },
};

export const Horizontal: Story = {
  render: Template,
  args: {
    header: 'Horizontal Card',
    description: 'This card has a horizontal layout.',
    imageUrl: 'https://picsum.photos/200/200',
    horizontal: true,
  },
};

export const UserProfile: Story = {
  render: Template,
  args: {
    header: 'John Doe',
    description: 'Software Developer',
    imageUrl: 'https://picsum.photos/200/200',
    isProfile: true,
  },
};

export const WithForm: Story = {
  render: Template,
  args: {
    header: 'Login',
    description: 'Please enter your credentials',
    hasForm: true,
  },
};
