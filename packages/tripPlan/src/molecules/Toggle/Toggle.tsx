import React, { ChangeEvent, FC, useState } from 'react';
import { ToggleProps } from './Toggle.props';
import { Checkbox, Input, Label, Link } from './Toggle.styled';

export const Toggle: FC<ToggleProps> = ({ label, value, href, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleOnChange = ({
        target: { checked }
    }: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(checked ? value : '');
        setIsChecked(!isChecked);
    };

    return (
        <Checkbox>
            <Input
                role="checkbox"
                aria-label={label}
                aria-checked={isChecked}
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
            />
            <Label>
                {href ? (
                    <Link href={href} target="_blank">
                        {label}
                    </Link>
                ) : (
                    label
                )}
            </Label>
        </Checkbox>
    );
};
