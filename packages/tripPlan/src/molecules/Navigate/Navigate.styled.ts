import styled from 'styled-components';
import { device } from '../../foundation/breakpoints';
import { fontSize } from '../../foundation/typography';

export const StyledNavigate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
`

export const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    
    svg {
        width: ${fontSize.lg};
        height: ${fontSize.lg};
    }
    
    @media only screen and ${device.desktop} {
        svg {
            width: ${fontSize.xl};
            height: ${fontSize.xl};
        }
    }
`
