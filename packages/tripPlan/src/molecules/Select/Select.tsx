import React, {
    createRef,
    FC,
    KeyboardEventHandler,
    RefObject,
    useEffect,
    useRef,
    useState
} from 'react';
import { SelectOption, SelectProps } from './Select.props';
import {
    StyledButton,
    StyledChevronWrapper,
    StyledItem,
    StyledLabel,
    StyledMenu,
    StyledSelect
} from './Select.styled';
import { ChevronDownIcon } from '../../assets/icons/ChevronDown';
import { KEY_CODES } from './constant';

export const Select: FC<SelectProps> = ({
    label = 'Please select an option...',
    options = [],
    onOptionSelected: handler,
    renderOption
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
    const [highlightedIndex, setHighlightedIndex] = useState<null | number>(
        null
    );
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [optionsRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>(
        []
    );
    const [overlayTop, setOverlayTop] = useState(0);

    useEffect(() => {
        setOverlayTop(buttonRef.current?.offsetHeight || 0);
    }, [buttonRef.current?.offsetHeight]);

    useEffect(() => {
        setOptionRefs(options.map((_) => createRef<HTMLLIElement>()));
    }, [options?.length]);

    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionsRefs[highlightedIndex];
            ref.current?.focus();
        }
    }, [isOpen]);

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        handler && handler(option, optionIndex);

        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };

    const highlightItem = (optionIndex: number | null) => {
        setHighlightedIndex(optionIndex);
    };

    const onButtonKeyDown: KeyboardEventHandler = (event) => {
        event.preventDefault();

        if (
            new Set([
                KEY_CODES.DOWN_ARROW,
                KEY_CODES.ENTER,
                KEY_CODES.SPACE
            ]).has(event.key)
        ) {
            setIsOpen(true);
            highlightItem(0);
        }
        if (new Set([KEY_CODES.ESC, KEY_CODES.UP_ARROW]).has(event.key)) {
            setIsOpen(false);
        }
    };

    return (
        <StyledSelect>
            <StyledButton
                ref={buttonRef}
                aria-controls="iw-select-list"
                aria-haspopup={true}
                aria-expanded={isOpen ? true : undefined}
                onKeyDown={onButtonKeyDown}
                onClick={() => setIsOpen(!isOpen)}
            >
                <StyledLabel>
                    {selectedIndex === null
                        ? label
                        : options[selectedIndex].label}
                </StyledLabel>
                <StyledChevronWrapper isOpen={isOpen}>
                    <ChevronDownIcon />
                </StyledChevronWrapper>
            </StyledButton>
            <StyledMenu
                role="menu"
                aria-hidden={isOpen ? undefined : true}
                id="iw-select-list"
                overlayTop={overlayTop}
                isOpen={isOpen}
            >
                {options.map((option, optionIndex) => {
                    const isSelected = optionIndex === selectedIndex;
                    const isHighlighted = optionIndex === highlightedIndex;

                    const ref = optionsRefs[optionIndex];

                    const renderOptionProps = {
                        ref,
                        option,
                        isSelected,
                        getOptionRecommendedProps: (overrideProps = {}) => ({
                            key: option.value,
                            ref,
                            tabIndex: isHighlighted ? -1 : 0,
                            isSelected,
                            isHighlighted,
                            onMouseEnter: () => highlightItem(optionIndex),
                            onMouseLeave: () => highlightItem(null),
                            onClick: () =>
                                onOptionSelected(option, optionIndex),
                            ...overrideProps
                        })
                    };

                    if (renderOption) {
                        return renderOption(renderOptionProps);
                    }
                    return (
                        <StyledItem
                            {...renderOptionProps.getOptionRecommendedProps()}
                        >
                            {option.label}
                        </StyledItem>
                    );
                })}
            </StyledMenu>
        </StyledSelect>
    );
};
