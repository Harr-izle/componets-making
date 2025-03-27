import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ name, type, state }) => `
  <my-button
    name="${name}"
    type="${type}"
    state="${state}"
  ></my-button>
`;

const meta: Meta = {
  title: "Components/Button",
  component: "my-button",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    type: { control: "text" },
    state: { 
      control: "select",
      options: ["default", "alternative", "dark", "light", "green", "red", "yellow", "purple"]
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
    name: "Default",
    type: "button",
    state: "default",
  },
};

export const Alternative: Story = {
  render: Template,
  args: {
    name: "Alternative",
    type: "button",
    state: "alternative",
  },
};

export const Dark: Story = {
  render: Template,
  args: {
    name: "Dark",
    type: "button",
    state: "dark",
  },
};
export const Light: Story = {
    render: Template,
    args: {
      name: "Light",
      type: "button",
      state: "light",
    },
  };

export const Green: Story = {
  render: Template,
  args: {
    name: "Green",
    type: "button",
    state: "green",
  },
};

  export const Red: Story = {
    render: Template,
    args: {
      name: "Red",
      type: "button",
      state: "red",
    },
    };
  export const Yellow: Story = {
    render: Template,
    args: {
      name: "Yellow",
      type: "button",
      state: "yellow",
    },
    };
  export const Purple: Story = {
    render: Template,
    args: {
      name: "Purple",
      type: "button",
      state: "purple",
    },
  };
