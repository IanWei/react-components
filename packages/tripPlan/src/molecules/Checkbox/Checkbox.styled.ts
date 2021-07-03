import styled from 'styled-components';
import { fontSize } from '../../foundation/typography';
import { device } from '../../foundation/breakpoints';
import { spacing } from '../../foundation/spacing';

export const StyledCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    
    &:not(:last-of-type) {
        margin-bottom: ${spacing.xxxs};    
    }
`
export const StyledLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    font-size: ${fontSize.xs};
    line-height: ${fontSize.xs};
    padding-left: 1.15rem;
    cursor: pointer;
    
    @media only screen and ${device.tablet} {
        font-size: ${fontSize.sm};
    }
    
    @media only screen and ${device.desktop} {
        font-size: ${fontSize.base};
    }
`
export const StyledInput = styled.input`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`
