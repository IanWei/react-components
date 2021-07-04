import React from 'react';
import { Options } from './Options';
import { OptionsProps } from './Options.props';
import { Meta, Story } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

export default {
    title: 'Organisms/Options',
    component: Options,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta;

const label = 'Mode';
const options = ['Metro', 'Train', 'Bus', 'Ferry', 'Light Rail'];
const options2 = ['High', 'Normal', 'Low'];

const Template: Story<OptionsProps> = (args) =>
    <Options
        {...args}
        label={text('Label', args.label)}
        options={select('Select', { first: options, second: options2 }, options)}
    />;

export const Base: Story<OptionsProps> = Template.bind({});

Base.args = {
    label,
    options
};
