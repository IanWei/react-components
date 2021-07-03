import React, { FC } from 'react';
import { OptionsProps } from './Options.props';
import { StyledOptionLabel, StyledOptionWrapper } from './Options.styled';
import { Checkbox } from '../../molecules/Checkbox';

export const Options: FC<OptionsProps> = ({ label, options, handleCheckboxChange}) => {
    return (
        <StyledOptionWrapper>
            <StyledOptionLabel>{label}</StyledOptionLabel>
            {options.map((option) => (
                <Checkbox key={option} label={option} handleCheckboxChange={handleCheckboxChange}/>
            ))}
        </StyledOptionWrapper>
    )
}
