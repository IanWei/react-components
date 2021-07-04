import { SelectOption } from './Select.props';

export const getNextOptionIndex = (currentIndex: number | null, options: SelectOption[]) => {
    if (currentIndex === null) return 0;
    if (currentIndex === options.length - 1) return 0;
    return currentIndex + 1;
}

export const getPrevOptionIndex = (currentIndex: number | null, options: SelectOption[]) => {
    if (currentIndex === null) return 0;
    if (currentIndex === 0) return options.length - 1;
    return currentIndex - 1;
}
