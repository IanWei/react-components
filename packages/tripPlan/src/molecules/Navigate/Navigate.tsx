import React, { FC } from 'react';
import { NavigateProps } from './Navigate.props';
import { StyledIconWrapper, StyledNavigate } from './Navigate.styled';
import { ChevronLeftIcon } from '../../assets/icons/ChevronLeft';
import { ChevronRightIcon } from '../../assets/icons/ChevronRight';

export const Navigate: FC<NavigateProps> = ({ prev, next }) => {
    return (
        <StyledNavigate>
            <StyledIconWrapper onClick={prev}>
                <ChevronLeftIcon />
            </StyledIconWrapper>
            <StyledIconWrapper onClick={next}>
                <ChevronRightIcon />
            </StyledIconWrapper>
        </StyledNavigate>
    )
}
