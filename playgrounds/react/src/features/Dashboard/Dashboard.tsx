import React, { FC } from 'react';
import { StyledDashboard } from './Dashboard.styled';
import { Calendar } from '@i.w/trip-plan';

// const selectOptions = [
//     {
//         label: 'Strict Black',
//         value: 'strict-black'
//     },
//     {
//         label: 'Heavenly Green',
//         value: 'heavenly-green'
//     },
//     {
//         label: 'Sweet Pink',
//         value: 'pink'
//     }
// ];

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
            <Calendar />
        </StyledDashboard>
    );
};
