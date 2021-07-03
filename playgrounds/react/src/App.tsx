import React from 'react';
import { Select, GlobalStyle, Heading, Tertiary } from '@i.w/trip-plan';

export const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Select />
            <Heading>Hello</Heading>
            <Tertiary>World</Tertiary>
        </div>
    );
};
