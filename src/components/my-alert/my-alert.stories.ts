import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

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
  render: () => `
    <my-alert message="This is an info alert" type="info"></my-alert>
    <my-alert message="This is a danger alert" type="danger"></my-alert>
    <my-alert message="This is a success alert" type="success"></my-alert>
    <my-alert message="This is a warning alert" type="warning"></my-alert>
  `
};

export const WithIcon: Story = {
  render: () => `
    <my-alert message="Info alert with icon" type="info" icon="ℹ️"></my-alert>
    <my-alert message="Danger alert with icon" type="danger" icon="⛔"></my-alert>
    <my-alert message="Success alert with icon" type="success" icon="✅"></my-alert>
    <my-alert message="Warning alert with icon" type="warning" icon="⚠️"></my-alert>
  `
};

export const Bordered: Story = {
  render: () => `
    <my-alert message="Info alert with border" type="info" bordered="true"></my-alert>
    <my-alert message="Danger alert with border" type="danger" bordered="true"></my-alert>
    <my-alert message="Success alert with border" type="success" bordered="true"></my-alert>
    <my-alert message="Warning alert with border" type="warning" bordered="true"></my-alert>
  `
};

export const WithList: Story = {
  render: () => `
    <my-alert message="Info alert with list" type="info" listItems="• First item\n• Second item\n• Third item"></my-alert>
    <my-alert message="Danger alert with list" type="danger" listItems="• First item\n• Second item\n• Third item"></my-alert>
    <my-alert message="Success alert with list" type="success" listItems="• First item\n• Second item\n• Third item"></my-alert>
    <my-alert message="Warning alert with list" type="warning" listItems="• First item\n• Second item\n• Third item"></my-alert>
  `
};

export const Dismissible: Story = {
  render: () => `
    <my-alert message="Info alert dismissible" type="info" dismissible="true"></my-alert>
    <my-alert message="Danger alert dismissible" type="danger" dismissible="true"></my-alert>
    <my-alert message="Success alert dismissible" type="success" dismissible="true"></my-alert>
    <my-alert message="Warning alert dismissible" type="warning" dismissible="true"></my-alert>
  `
};
