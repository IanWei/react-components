import React from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.props';
import { Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

export default {
    title: 'Molecules/Checkbox',
    component: Checkbox
};

const Template: Story<CheckboxProps> = (args) => (
    <Checkbox {...args} label={text('Label', args.label)} />
);

export const Primary: Story<CheckboxProps> = Template.bind({});

Primary.args = {
    label: 'Testing',
    handleCheckboxChange(label: string) {
        console.log(label);
    }
};
