import React, { FC, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarProps } from './Calendar.props';
import {
    StyledBody,
    StyledCalendar,
    StyledDay,
    StyledDayNames,
    StyledDayStyles,
    StyledHeader,
    StyledWeek
} from './Calendar.styled';

export const Calendar: FC<CalendarProps> = () => {
    const [calendar, setCalendar] = useState<Dayjs[][]>([]);
    const [] = useState();

    const targetDay = dayjs().subtract(2, 'month').format('YYYY-MM-DD');
    useEffect(() => {
        // @ts-ignore
        window.dayjs = dayjs;
        calendarBuilder();
    }, []);

    const calendarBuilder = () => {
        console.log(targetDay);
        const startDay = dayjs(targetDay || new Date())
            .startOf('month')
            .startOf('week');
        const endDay = dayjs(targetDay || new Date())
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
        return dayjs().isSame(day, 'date');
    };

    const beforeCurrentMonth = (day: Dayjs) => {
        const startDay = dayjs(targetDay).startOf('month').add(24, 'hour');
        return dayjs(day).isBefore(startDay, 'day');
    };

    const afterCurrentMonth = (day: Dayjs) => {
        const endDay = dayjs(targetDay).endOf('month').add(24, 'hour');
        return dayjs(day).isAfter(endDay, 'day');
    };

    const dayStyles = (day: Dayjs) => {
        if (beforeCurrentMonth(day)) return 'before';
        if (afterCurrentMonth(day)) return 'after';
        if (isToday(day)) return 'today';
        return '';
    };

    return (
        <StyledCalendar>
            <StyledHeader>
                <span>1</span>
                <span>2</span>
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
