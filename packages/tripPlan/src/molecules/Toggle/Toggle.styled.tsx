import styled from 'styled-components';
import { CustomRadioCheckbox, HiddenRadioCheckbox } from './styledUtils';

export const Checkbox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    ${CustomRadioCheckbox};
`;

export const Link = styled.a`
    color: #43bd43;
    font-size: 12px;
    font-weight: bold;
    padding: 0;
    text-decoration: underline;
`;

export const Input = styled.input`
    ${HiddenRadioCheckbox};

    &:checked + ${Label}::before {
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='8' viewBox='0 0 19 13' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M18.6,3.4 C18.8,3.2 18.8,2.9 18.6,2.7 L16.3,0.4 C16.1,0.2 15.8,0.2 15.6,0.4 L7,9 L3.4,5.4 C3.2,5.2 2.9,5.2 2.7,5.4 L0.4,7.7 C0.2,7.9 0.2,8.2 0.4,8.4 L6.7,14.7 C6.9,14.9 7.2,14.9 7.4,14.7 L18.6,3.4 Z' fill='%23646974'/%3E %3C/svg%3E")
            no-repeat center;
        background-color: white;
    }

    &:focus ~ ${Label}::before {
        outline: 2px solid #2e5299;
        outline-offset: 2px;
    }

    &:disabled + ${Label}::before {
        opacity: 1;
        background-color: #f4f7f9;
    }
`;
