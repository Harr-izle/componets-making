
import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ message, type, icon, bordered, listItems, dismissible }) => `
  <my-alert
    message="${message}"
    type="${type}"
    ${icon ? `icon="${icon}"` : ''}
    ${bordered ? 'bordered="true"' : ''}
    ${listItems ? `listItems="${listItems}"` : ''}
    ${dismissible ? 'dismissible="true"' : ''}
  ></my-alert>
`;

const meta: Meta = {
  title: "Components/MyAlert",
  component: "my-alert",
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
    type: { 
      control: "select",
      options: ["success", "error", "warning", "info"]
    },
    icon: { control: "text" },
    bordered: { control: "boolean" },
    listItems: { control: "text" },
    dismissible: { control: "boolean" }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: Template,
  args: {
    message: "This is a default alert",
    type: "info",
  },
};

export const WithIcon: Story = {
  render: Template,
  args: {
    message: "Alert with icon",
    type: "warning",
    icon: "⚠️",
  },
};

export const Bordered: Story = {
  render: Template,
  args: {
    message: "Bordered alert",
    type: "danger",
    bordered: true,
  },
};

export const WithList: Story = {
  render: Template,
  args: {
    message: "Alert with a list",
    type: "warning",
    listItems: "Item 1, Item 2, Item 3",
  },
};

export const Dismissible: Story = {
  render: Template,
  args: {
    message: "Dismissible alert",
    type: "info",
    dismissible: true,
  },
};

export const info: Story = {
    render: Template,
    args: {
        message: "Info alert! Change a few things up and try submitting again.",
        type: "info",
    },
}

export const danger: Story = {
    render: Template,
    args: {
        message: "Danger alert! Change a few things up and try submitting again.",
        type: "danger",
    },
}

export const Success: Story = {
    render: Template,
    args: {
        message: "Success alert! Change a few things up and try submitting again.",
        type: "success",
    },
}

export const Warning: Story = {
    render: Template,
    args: {
        message: "Warning alert ! Change a few things up and try submitting again.",
        type: "warning",
    },
}
