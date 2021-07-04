import React from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.props';
import { Story } from '@storybook/react';

export default {
    title: 'Molecules/Checkbox',
    component: Checkbox
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Testing',
    handleCheckboxChange(label: string) {
        console.log(label);
    }
} as CheckboxProps;
