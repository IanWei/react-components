import React from 'react';
import { Story } from '@storybook/react';
import { Calendar } from './Calendar';
import { CalendarProps } from './Calendar.props';

export default {
    title: 'Molecules/Calendar',
    component: Calendar
};

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Base: Story<CalendarProps> = Template.bind({});
