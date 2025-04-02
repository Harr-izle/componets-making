import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ name, type, icon, link }) => `
  <my-badge
    name="${name}"
    type="${type}"
    icon="${icon || ''}"
    link="${link || ''}"
  ></-badge>
`;

const meta: Meta = {
  title: "Components/MyBadge",
  component: "my-badge",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    type: { 
      control: "select",
      options: ["default", "large", "bordered", "pill", "link", "icon", "notification", "button", "icon-only", "dismissible"]
    },
    icon: { control: "text" },
    link: { control: "text" },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: Template,
  args: {
    name: "Default Badge",
    type: "default",
  },
};

export const Large: Story = {
  render: Template,
  args: {
    name: "Large Badge",
    type: "large",
  },
};

export const Bordered: Story = {
  render: Template,
  args: {
    name: "Bordered Badge",
    type: "bordered",
  },
};

export const Pill: Story = {
  render: Template,
  args: {
    name: "Pill Badge",
    type: "pill",
  },
};

export const BadgeLink: Story = {
  render: Template,
  args: {
    name: "Badge link",
    type: "link,bordered",
    link: "https://ww1.goojara.to",
  },
};

export const BadgeWithIcon: Story = {
  render: Template,
  args: {
    name: "Badge with Icon",
    type: "icon",
    icon: "⭐",
  },
};

export const NotificationBadge: Story = {
  render: Template,
  args: {
    name: "Notifications",
    type: "notification",
  },
};



export const DismissibleBadge: Story = {
  render: Template,
  args: {
    name: "Dismissible Badge",
    type: "dismissible",
  },
};
