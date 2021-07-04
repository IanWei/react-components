import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    let checkbox: HTMLDivElement;
    let snapshot: () => DocumentFragment;
    const handleCheckboxChange = jest.fn();

    beforeEach(() => {
        const { queryByTitle, asFragment } = render(
            <Checkbox
                label="test"
                handleCheckboxChange={handleCheckboxChange}
            />
        );
        checkbox = queryByTitle('checkbox') as HTMLDivElement;
        snapshot = asFragment;
    });

    it('should render checkbox', () => {
        expect(checkbox).toBeTruthy();
    });

    it('should render text passed by label prop', () => {
        expect(screen.getByRole('label')).toHaveTextContent('test');
    });

    it('should call the handleCheckboxChange prop with the checkbox while it is toggled', () => {
        fireEvent.click(checkbox);
        expect(handleCheckboxChange).toHaveBeenCalled();
    });

    it('should test the snapshot of the base state', () => {
        expect(snapshot()).toMatchSnapshot();
    });

    it('should test the snapshot of the toggle state', () => {
        fireEvent.click(checkbox);
        expect(snapshot()).toMatchSnapshot();
    });
});
