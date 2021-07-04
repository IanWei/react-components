import React from 'react';
import { GlobalStyle } from '@i.w/trip-plan';
import { Dashboard } from './features/Dashboard/Dashboard';

export const App = () => {
    return (
        <div style={{width: '100%'}}>
            <GlobalStyle />
            <Dashboard />
        </div>
    );
};
