import React from 'react';
import { Select } from './Select';
import { SelectProps } from './Select.props';
import { Story } from '@storybook/react';

export default {
    title: 'Molecules/Select',
    component: Select
}

const selectOptions = [
    {
        label: 'Strict Black',
        value: 'strict-black'
    },
    {
        label: 'Heavenly Green',
        value: 'heavenly-green'
    },
    {
        label: 'Sweet Pink',
        value: 'pink'
    }
];

const Template: Story<SelectProps> = (args) => <Select {...args}/>

export const Base: Story<SelectProps> = Template.bind({});
Base.args = {
    options: selectOptions
}
