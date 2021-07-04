import React from 'react';
import { Options } from './Options';
import { OptionsProps } from './Options.props';
import { Story } from '@storybook/react';

export default {
    title: 'Organisams/Options',
    component: Options
}

const Template: Story<OptionsProps> = (args) => <Options {...args}/>

export const Base: Story<OptionsProps> = Template.bind({});

Base.args = {
    label: 'Mode',
    options: ['Metro', 'Train', 'Bus', 'Ferry', 'Light Rail']
}
