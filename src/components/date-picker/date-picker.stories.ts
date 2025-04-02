import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const Template = ({ isRange, startDate, endDate, showDefault }) => `
  <my-date-picker
    is-range="${isRange}"
    start-date="${startDate || ''}"
    end-date="${endDate || ''}"
    show-default="${showDefault}"
  ></my-date-picker>
`;

const meta: Meta = {
  title: 'Components/DatePicker',
  component: 'my-date-picker',
  tags: ['autodocs'],
  argTypes: {
    isRange: { control: 'boolean' },
    startDate: { control: 'text' },
    endDate: { control: 'text' },
    showDefault: { control: 'boolean' }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
export const DefaultDatepicker: Story = {
    render: Template,
    args: {
      isRange: false,
      startDate: '',
      endDate: '',
      showDefault: true
    },
};

export const InlineDatepicker: Story = {
  render: Template,
  args: {
    isRange: false,
    startDate: '',
    endDate: '',
    showDefault: false
  },
};

export const DateRangePicker: Story = {
  render: Template,
  args: {
    isRange: true,
    startDate: '',
    endDate: '',
    showDefault: false
  },
};


export const PreselectedDatePicker: Story = {
  render: Template,
  args: {
    isRange: false,
    startDate: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
    endDate: '',
    showDefault: true
  },
};
