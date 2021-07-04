import styled from 'styled-components';
import { fontFamily, fontSize } from '../../foundation/typography';
import { spacing } from '../../foundation/spacing';
import { color } from '../../foundation/palette';
import { shadows } from '../../foundation/shadows';

export const StyledSelect = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const StyledButton = styled.button`
    display: flex;   
    align-items: center;
    justify-content: space-between;
    padding: ${spacing.xs};
    border: 1px solid ${color.whiteDark};
    background-color: ${color.white};
    cursor: pointer;
    box-shadow: ${shadows.base};
`

export const StyledLabel = styled.p`
    font-family: ${fontFamily.body};
    font-size: ${fontSize.base};
`

export const StyledChevronWrapper = styled.div<{isOpen: boolean}>`
    display: flex;
    align-items: center;
    
    svg {
        width: ${fontSize.base};
        height: ${fontSize.base};
        transition: all .2s ease;
        transform: ${p => p.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'};
    }
`

export const StyledMenu = styled.ul<{overlayTop: number, isOpen: boolean}>`
    display: flex;
    flex-direction: column;
    list-style: none;
    border: ${p => p.isOpen ? '1px' : '0px'} solid ${color.whiteDark};
    background-color: ${color.white};
    position: absolute;
    margin-top: ${p => p.overlayTop}px;
    max-height: ${p => p.isOpen ? '300px' : '0px'};
    width: 100%;
    z-index: 1;
    overflow-y: scroll;
    transition: all .2s ease;
    cursor: pointer;
    box-shadow: ${shadows.base};
`

export const StyledItem = styled.li<{isSelected: boolean}>`
    display: flex;
    align-items: center;
    padding: ${spacing.xs};
    font-family: ${fontFamily.body};
    font-size: ${fontSize.base};
    color: ${p => p.isSelected ? color.white : color.mineShaft};
    background-color: ${p => p.isSelected ? color.orange : color.white};
    transition: all .1s ease;
    
    &:hover {
        background-color: ${p => p.isSelected ? color.orange : color.whiteDark};
    }
`
