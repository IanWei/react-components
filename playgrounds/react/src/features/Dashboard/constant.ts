import { ToggleProps } from "@i.w/trip-plan/lib/molecules/Toggle/Toggle.props";

type Option = Omit<ToggleProps, 'onChange'>;

export const toggles: Option[] = [
    {
        label: 'box1',
        value: 'bx1'
    },
    {
        label: 'box2',
        value: 'bx2'
    },
    {
        label: 'box3',
        value: 'bx3'
    },
    {
        label: 'box4',
        value: 'bx4'
    },
    {
        label: 'box5',
        value: 'bx5'
    },
    {
        label: 'box6',
        value: 'bx6'
    },

]
