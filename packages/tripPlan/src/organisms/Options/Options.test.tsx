import React from 'react';
import { render, screen } from '@testing-library/react';
import { Options } from './Options';

describe('Options', () => {
    let optionsElement: HTMLDivElement;
    let allOptions: HTMLInputElement[];
    let snapshot: () => DocumentFragment;
    const label = 'priority';
    const options = ['High', 'Normal', 'Low'];
    const handleCheckboxChange = jest.fn();

    beforeEach(() => {
        const { queryByTitle, queryAllByRole, asFragment } = render(
            <Options
                label={label}
                options={options}
                handleCheckboxChange={handleCheckboxChange}
            />
        );
        optionsElement = queryByTitle('options') as HTMLDivElement;
        allOptions = queryAllByRole('checkbox') as HTMLInputElement[];
        snapshot = asFragment;
    });

    it('should render options component', () => {
        expect(optionsElement).toBeTruthy();
    });

    it('should render all options', () => {
        expect(allOptions).toHaveLength(3);
    });

    it('should render label passed by props', () => {
        expect(screen.queryByTitle('option-title')).toHaveTextContent(
            'priority'
        );
    });

    it('should test the snapshot of the component', () => {
        expect(snapshot()).toMatchSnapshot();
    });
});
