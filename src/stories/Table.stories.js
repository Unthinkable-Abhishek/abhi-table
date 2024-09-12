import { fn } from '@storybook/test';
import { Table } from './Table';
import { data, headers } from './Table.data';

export default {
  title: 'Example/Table',
  component: Table,
  parameters: { layout: 'centered', },
  tags: ['autodocs'],
  argTypes: { backgroundColor: { control: 'color' },},
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: false,
    data: data,
    headers: headers,
    backgroundColor: "#e9e5e5",
  },
};