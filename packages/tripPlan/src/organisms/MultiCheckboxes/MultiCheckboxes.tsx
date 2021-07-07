import React, { FC } from 'react';
import { MultiCheckboxesProps } from './MultiCheckboxes.props';
import { Wrapper, Item } from './MultipCheckboxes.styled';
import { Toggle } from '../../molecules/Toggle';

export const MultiCheckboxes: FC<MultiCheckboxesProps> = ({
    options,
    onChange
}) => {
    return (
        <Wrapper>
            {options.map((props, index) => (
                <Item key={index}>
                    <Toggle {...props} onChange={onChange} />
                </Item>
            ))}
        </Wrapper>
    );
};
