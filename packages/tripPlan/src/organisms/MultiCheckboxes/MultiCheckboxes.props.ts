import { ToggleProps } from "../../molecules/Toggle/Toggle.props";

type Option = Omit<ToggleProps, 'onChange'>;

export interface MultiCheckboxesProps {
    options: Option[],
    onChange(value: string): void
}
