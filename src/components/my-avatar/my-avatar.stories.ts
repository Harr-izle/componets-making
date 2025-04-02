import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ src, initials, alt, size, bordered, tooltip, status, stacked }) => `
  <my-avatar
    ${src ? `src="${src}"` : ''}
    ${initials ? `initials="${initials}"` : ''}
    alt="${alt || 'User avatar'}"
    size="${size}"
    ${bordered ? 'bordered="true"' : ''}
    ${tooltip ? `tooltip="${tooltip}"` : ''}
    ${status ? `status="${status}"` : ''}
    ${stacked ? 'stacked="true"' : ''}
  ></my-avatar>
`;


const meta: Meta = {
  title: "Components/Avatar",
  component: "avatar-component",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    initials: { control: "text" },
    alt: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    bordered: { control: "boolean" },
    tooltip: { control: "text" },
    status: { control: "select", options: ["online", "offline", ""] },
    stacked: { control: "boolean" }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: Template,
  args: { src: "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg" },
};

export const Bordered: Story = {
  render: Template,
  args: { src: "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg", bordered: true },
};

export const Placeholder: Story = {
  render: Template,
  args: {},
};

export const Initials: Story = {
  render: Template,
  args: { initials: "AG" },
};

export const WithTooltip: Story = {
  render: Template,
  args: { src: "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg", tooltip: "Athena Grant" },
};

export const DotIndicator: Story = {
  render: Template,
  args: { 
    src: "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg", 
    status: "online" 
  },
};


export const Stacked: Story = {
  render: () => `
    <div style="display: flex; align-items: center;" >
      <my-avatar src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg" stacked></my-avatar>
      <my-avatar src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg" stacked></my-avatar>
      <my-avatar src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg" stacked></my-avatar>
      <my-avatar src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_960_720.jpg" stacked></my-avatar>
    </div>
  `,
};
