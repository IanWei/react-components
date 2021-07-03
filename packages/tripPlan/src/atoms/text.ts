import styled from 'styled-components';
import { fontFamily, fontSize, fontWeight } from '../foundation/typography';
import { device } from '../foundation/breakpoints';

export const Heading = styled.h3`
    font-family: ${fontFamily.headings};
    font-size: ${fontSize.lg};
    font-weight: ${fontWeight.semiBold};
    
    @media only screen and ${device.desktop} {
        font-size: ${fontSize.xl};
    }
`

export const Tertiary = styled.p`
    font-weight: ${fontWeight.medium};
    font-size: ${fontSize.xs};
    
    @media only screen and ${device.tablet} {
        font-size: ${fontSize.sm};
    }
    
    @media only screen and ${device.desktop} {
        font-size: ${fontSize.base};
    }
`

export const Description = styled.p`
    font-size: ${fontSize.xs};
    
    @media only screen and ${device.tablet} {
        font-size: ${fontSize.sm};
    }
    
    @media only screen and ${device.desktop} {
        font-size: ${fontSize.base};
    }
`

