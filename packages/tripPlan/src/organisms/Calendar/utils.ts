import dayjs from 'dayjs';
import { SelectOption } from '../../molecules/Select/Select.props';

export const getValidYearsOptions = () => {
    const current = dayjs();
    let start = current.subtract(5, 'year');
    const options: SelectOption[] = [];
    for (let i = 0; i < 10; i++) {
        options.push({
            value: '' + start.year(),
            label: start.format('MMM YYYY')
        });
        start = start.add(1, 'year');
    }
    return options;
}
