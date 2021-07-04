import React, { FC, useState } from 'react';
import {
    StyledCheckboxWrapper,
    StyledInput,
    StyledLabel
} from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.props';

export const Checkbox: FC<CheckboxProps> = ({
    label,
    handleCheckboxChange
}) => {
    const [isChecked, setCheck] = useState<boolean>(false);
    const toggleCheckboxChange = () => {
        setCheck(!isChecked);
        handleCheckboxChange(label);
    };
    return (
        <StyledCheckboxWrapper>
            <StyledLabel role="label">
                <StyledInput
                    role="checkbox"
                    aria-label={label}
                    aria-checked={isChecked}
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                />
                {label}
            </StyledLabel>
        </StyledCheckboxWrapper>
    );
};
