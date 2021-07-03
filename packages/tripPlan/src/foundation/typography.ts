/*=============================================
=                Typography                   =
=============================================*/

/**
 *
 * 1) The playfair font. We'll use this for headings mostly.
 *     https://fonts.google.com/specimen/Playfair+Display
 *
 * 2) The raleway font. We'll use this for the body text.
 *     https://fonts.google.com/specimen/Raleway
 */

/* Font families */

const headings = `"Playfair Display", serif`;
const body = `"Raleway", "HelveticaNeue", "Helvetica", sans-serif`;

/* Font sizes */

const xs = '.75rem'; // 12px
const sm = '.875rem'; // 14px
const base = '1rem'; // 16px;
const lg = '1.125rem'; // 18px;
const xl = '1.5rem'; // 24px;

/* Font weights */

const light = 300;
const normal = 400;
const medium = 500;
const semiBold = 600;
const bold = 700;
const extraBold = 800;
const black = 900;

export const fontFamily = {
    headings,
    body
}

export const fontSize = {
    xs,
    sm,
    base,
    lg,
    xl
}

export const fontWeight = {
    light,
    normal,
    medium,
    semiBold,
    bold,
    extraBold,
    black
}
