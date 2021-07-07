import React, { FC } from 'react';
import { StyledDashboard } from './Dashboard.styled';
import { Toggle, MultiCheckboxes } from '@i.w/trip-plan';
import { toggles } from './constant';

export const Dashboard: FC = () => {
    // const [selected, setSelected] = useState(new Set());
    // const handleToggle = (label: string) => {
    //     selected.has(label)
    //         ? setSelected((prev) => {
    //               const updated = new Set(prev);
    //               updated.delete(label);
    //               return updated;
    //           })
    //         : setSelected((prev) => new Set(prev).add(label));
    // };
    // const options = ['High', 'Normal', 'Low'];
    // useEffect(() => {
    //     console.log(selected);
    // }, [selected]);
    return (
        <StyledDashboard>
            <MultiCheckboxes options={toggles} onChange={() => {}} />
        </StyledDashboard>
    );
};
