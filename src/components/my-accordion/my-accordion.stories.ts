import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/MyAccordion',
  component: 'my-accordion',
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'nested']
    },
    isOpen: { control: 'boolean' }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = {
  render: () => `
    <my-accordion header="Default Accordion">
      This is the default accordion content.
    </my-accordion>
  `
};

export const Bordered: Story = {
  render: () => `
    <my-accordion header="Bordered Accordion" variant="bordered">
      This is the bordered accordion content.
    </my-accordion>
  `
};

export const Nested: Story = {
  render: () => `
    <my-accordion header="Parent Accordion">
      <p>This is the parent accordion content.</p>
      <my-accordion header="Nested Accordion 1" variant="nested">
        This is nested accordion 1 content.
      </my-accordion>
      <my-accordion header="Nested Accordion 2" variant="nested">
        This is nested accordion 2 content.
        <my-accordion header="Deeply Nested Accordion" variant="nested">
          This is a deeply nested accordion content.
        </my-accordion>
      </my-accordion>
    </my-accordion>
  `
};

