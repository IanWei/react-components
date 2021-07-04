import React, { FC, useEffect, useState } from 'react';
import { StyledDashboard } from './Dashboard.styled';
import { Checkbox, Heading, Select, Tertiary, Options } from '@i.w/trip-plan';

export const Dashboard: FC = () => {
    const [selected, setSelected] = useState(new Set());
    const handleToggle = (label: string) => {
        selected.has(label)
            ? setSelected((prev) => {
                  const updated = new Set(prev);
                  updated.delete(label);
                  return updated;
              })
            : setSelected((prev) => new Set(prev).add(label));
    };
    const options = ['High', 'Normal', 'Low'];
    useEffect(() => {
        console.log(selected);
    }, [selected]);
    return (
        <StyledDashboard>
            <Select />
            <Heading>Hello</Heading>
            <Tertiary>World</Tertiary>
            <Checkbox label="Ferry" handleCheckboxChange={handleToggle} />
            <Options
                label="Priority"
                options={options}
                handleCheckboxChange={handleToggle}
            />
        </StyledDashboard>
    );
};
