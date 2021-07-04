import styled from 'styled-components';
import { color } from '../../foundation/palette';
import { shadows } from '../../foundation/shadows';
import { spacing } from '../../foundation/spacing';
import { fontFamily, fontSize, fontWeight } from '../../foundation/typography';
import { device } from '../../foundation/breakpoints';

export const StyledCalendar = styled.div`
    margin: 0 auto;
    width: 350px;    
    font-size: ${fontSize.xs};
    
    @media only screen and ${device.tablet} {
        width: 525px;
        font-size: ${fontSize.sm};
    }
    
    @media only screen and ${device.desktop} {
        font-size: ${fontSize.base};
    }
`

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${spacing.xxxs};
`

export const StyledBody = styled.div`
    border: 1px solid ${color.whiteDark};
    box-shadow: ${shadows.base};
`

export const StyledDayNames = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: ${fontFamily.headings};
    font-weight: ${fontWeight.semiBold};
    color: ${color.rollingStone};
    margin: 0 auto;
    align-items: center;
`

export const StyledWeek = styled.div`
    background-color: ${color.white};
    width: calc(100% / 7);
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;   
    
    @media only screen and ${device.tablet} {
        height: 75px;
        line-height: 75px;
    }
`

export const StyledDay = styled.div`
    position: relative;
    width: calc(100% / 7);
    height: 50px;
    display: inline-block;
    background-color: ${color.white};
    z-index: 1;
    text-align: center;
    &:focus {
        outline: none;
    }
    
    @media only screen and ${device.tablet} {
        height: 75px;
    }
`

type DayStyle = 'before' | 'after' | 'today' | '';

export const StyledDayStyles =styled.div<{dayStyle: DayStyle}>`
    height: 50px;
    position: relative;
    z-index: 100;
    line-height: 50px;
    color: ${p => (p.dayStyle === 'before' || p.dayStyle === 'after') ? 'transparent' : color.mineShaft};
    border: 1px solid ${p => p.dayStyle === 'today' ? color.rollingStone : 'transparent'};
    border-radius: 50%;
    cursor: pointer;
    
    &:hover {
        background-color: ${color.whiteDark};
    }
    
    @media only screen and ${device.tablet} {
        height: 75px;
        line-height: 75px;
    }
`
