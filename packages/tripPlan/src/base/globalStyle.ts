import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontSize, fontWeight } from '../foundation/typography';
import { color } from '../foundation/palette';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        margin: 0;
        box-sizing: inherit;
    }
    body {
        color: ${color.mineShaft};
        background-color: ${color.whiteDark};
        font-family: ${fontFamily.body};
        font-size: ${fontSize.base};
        font-weight: ${fontWeight.normal};
    }
`
