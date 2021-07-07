export interface ToggleProps {
    label: string,
    value: string,
    href?: string,
    onChange(value: string): void
}
