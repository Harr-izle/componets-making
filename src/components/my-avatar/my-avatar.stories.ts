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
  args: { src: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740" },
};

export const Bordered: Story = {
  render: Template,
  args: { src: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740", bordered: true },
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
  args: { src: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740", tooltip: "Athena Grant" },
};

export const DotIndicator: Story = {
  render: Template,
  args: { src: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740", status: "online" },
};

export const Stacked: Story = {
  render: () => `
    <div style="display: flex; align-items: center;" >
      <my-avatar src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740" stacked></my-avatar>
      <my-avatar src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740" stacked></my-avatar>
      <my-avatar src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740" stacked></my-avatar>
      <my-avatar src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1743085895~exp=1743089495~hmac=5c72c502eeb4ec60c66bd5b892cb93db7f3c3063e2612c7bad300ae3f086bbcd&w=740" stacked></my-avatar>
    </div>
  `,
};
