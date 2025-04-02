
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
      <div slot="content">This is the default accordion content.</div>
    </my-accordion>
  `
};

export const Bordered: Story = {
  render: () => `
    <my-accordion header="Bordered Accordion" variant="bordered">
      <div slot="content">This is the bordered accordion content.</div>
    </my-accordion>
    <my-accordion header="Bordered Accordion" variant="bordered">
      <div slot="content">This is the bordered accordion content.</div>
    </my-accordion>
    <my-accordion header="Bordered Accordion" variant="bordered">
      <div slot="content">This is the bordered accordion content.</div>
    </my-accordion>
  `
}




export const NestedContent: Story = {
  render: () => `
    <my-accordion header="Accordion with Complex Content">
      <div slot="content">
        <h3>Nested Heading</h3>
        <p>This is a paragraph inside the accordion.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </div>
    </my-accordion>
  `
};
