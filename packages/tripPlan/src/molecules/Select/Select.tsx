import React, { FC, useEffect, useRef, useState } from 'react';
import { SelectProps, SelectOption } from './Select.props';
import { StyledButton, StyledChevronWrapper, StyledItem, StyledLabel, StyledMenu, StyledSelect } from './Select.styled';
import { ChevronDownIcon } from '../../assets/icons/ChevronDown';

export const Select: FC<SelectProps> = ({label= 'Please select an option...', options=[], onOptionSelected: handler}) => {
    const [ isOpen, setIsOpen ] = useState( false );
    const [selectedIndex, setSelectedIndex] = useState<null|number>(null);
    const buttonRef = useRef<HTMLButtonElement >(null);
    const [overlayTop, setOverlayTop] = useState(0);


    useEffect(() => {
        setOverlayTop(buttonRef.current?.offsetHeight || 0);
    }, [buttonRef.current?.offsetHeight])

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        handler && handler(option, optionIndex);

        setSelectedIndex(optionIndex);
        setIsOpen(false);
    }
    return (
        <StyledSelect>
            <StyledButton ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
                <StyledLabel>{selectedIndex === null ? label : options[selectedIndex].label}</StyledLabel>
                <StyledChevronWrapper isOpen={isOpen}>
                    <ChevronDownIcon />
                </StyledChevronWrapper>

            </StyledButton>
            <StyledMenu overlayTop={overlayTop} isOpen={isOpen}>
                { options.map( ( option, optionIndex ) => (
                    <StyledItem
                        key={option.label}
                        isSelected={optionIndex === selectedIndex}
                        onClick={() => onOptionSelected( option, optionIndex )}>
                        { option.label }
                    </StyledItem>
                ))}
            </StyledMenu>
        </StyledSelect>
    )
};
