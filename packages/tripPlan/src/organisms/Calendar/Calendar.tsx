import React, { FC, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarProps } from './Calendar.props';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import {
    StyledBody,
    StyledCalendar,
    StyledDay,
    StyledDayNames,
    StyledDayStyles,
    StyledHeader,
    StyledWeek,
    StyledYearWrapper
} from './Calendar.styled';
import { Navigate } from '../../molecules/Navigate';
import { Select } from '../../molecules/Select';
import { getValidYearsOptions } from './utils';
import { SelectOption } from '../../molecules/Select/Select.props';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/New_York');

export const Calendar: FC<CalendarProps> = () => {
    const [calendar, setCalendar] = useState<Dayjs[][]>([]);
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [options, setOptions] = useState<SelectOption[]>([]);

    useEffect(() => {
        // @ts-ignore
        window.dayjs = dayjs;
        calendarBuilder();
    }, [currentDate]);

    useEffect(() => {
        setOptions(getValidYearsOptions());
    }, []);

    const handlePrevButton = () => {
        setCurrentDate(dayjs(currentDate).subtract(1, 'month'));
    };

    const handleNextButton = () => {
        setCurrentDate(dayjs(currentDate).add(1, 'month'));
    };

    const calendarBuilder = () => {
        const startDay = dayjs(currentDate || new Date())
            .startOf('month')
            .startOf('week');
        const endDay = dayjs(currentDate || new Date())
            .endOf('month')
            .endOf('week');
        let day = startDay;
        const _calendar: Dayjs[][] = [];
        while (day.isBefore(endDay)) {
            _calendar.push(
                Array(7)
                    .fill(0)
                    .map(() => {
                        day = day.add(24, 'hour');
                        return day;
                    })
            );
        }
        setCalendar(_calendar);
    };

    const isToday = (day: Dayjs) => {
        if (dayjs(new Date().toLocaleString()).isSame(day, 'date')) {
            console.log(day.format('DD MM'));
        }
        return dayjs().isSame(day, 'date');
    };

    const beforeCurrentMonth = (day: Dayjs) => {
        const startDay = dayjs(currentDate).startOf('month').add(1, 'hour');
        return dayjs(day).isBefore(startDay, 'day');
    };

    const afterCurrentMonth = (day: Dayjs) => {
        const endDay = dayjs(currentDate).endOf('month').add(1, 'hour');
        return dayjs(day).isAfter(endDay, 'day');
    };

    const dayStyles = (day: Dayjs) => {
        if (beforeCurrentMonth(day)) return 'before';
        if (afterCurrentMonth(day)) return 'after';
        if (isToday(day)) return 'today';
        return '';
    };

    const handleSelect = (option: SelectOption, _: number) => {
        setCurrentDate(dayjs(option.value).add(24, 'hour'));
    };

    return (
        <StyledCalendar>
            <StyledHeader>
                <StyledYearWrapper>
                    <Select
                        label={currentDate.format('MMM YYYY')}
                        options={options}
                        onOptionSelected={handleSelect}
                    />
                </StyledYearWrapper>
                <Navigate prev={handlePrevButton} next={handleNextButton} />
            </StyledHeader>
            <StyledBody>
                <StyledDayNames>
                    {['s', 'm', 't', 'w', 't', 'f', 's'].map((d, ni) => (
                        <StyledWeek key={ni}>{d}</StyledWeek>
                    ))}
                </StyledDayNames>
                {calendar.map((week, wi) => (
                    <div key={wi}>
                        {week.map((day, di) => (
                            <StyledDay
                                key={di}
                                tabIndex={
                                    beforeCurrentMonth(day) ||
                                    afterCurrentMonth(day)
                                        ? undefined
                                        : wi * 7 + di + 1
                                }
                            >
                                <StyledDayStyles dayStyle={dayStyles(day)}>
                                    {day.format('DD')}
                                </StyledDayStyles>
                            </StyledDay>
                        ))}
                    </div>
                ))}
            </StyledBody>
        </StyledCalendar>
    );
};
