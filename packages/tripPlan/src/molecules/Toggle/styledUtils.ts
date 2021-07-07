import { css } from 'styled-components';

export const HiddenRadioCheckbox = css`
    position: absolute;
    opacity: 0;
    width: .8rem;
    height: .8rem;
    top: 50%;    
    left: 0;
    z-index: 1;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transform: translateY(-50%);
`;

export const CustomRadioCheckbox = css`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin: 0;
    font-size: 12px;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        border: 2px solid #646974;
        background-color: #fff;
        width: .8rem;
        height: .8rem;
        box-sizing: border-box;
        transform: translateY(-50%);
    }

    &::after {
        position: absolute;
        content: '';
        top: calc(50% - 3px);
        left: -3px;
        width: calc(.8rem + 6px);
        height: calc(.8rem + 6px);
        box-sizing: border-box;
        transform: translateY(-50% - 3px);
    }
`;
