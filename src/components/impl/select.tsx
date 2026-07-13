import { Label } from "../ui/label";
import {
    SelectContent,
    SelectItem,
    Select as SelectRoot,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

type SelectProps = {
    label?: string;
    defaultValue: string;
    onValueChange: (value: string) => void;
    options?: { value: string; label: string }[];
    placeholder?: string;
};

const Select = ({
    label,
    defaultValue: value,
    onValueChange,
    options,
    placeholder,
}: SelectProps) => {
    return (
        <div className="flex flex-col gap-2">
            {label && <Label>{label}</Label>}
            <SelectRoot defaultValue={value} onValueChange={onValueChange}>
                <SelectTrigger className="mc-button-primary">
                    <SelectValue
                        placeholder={placeholder || "Select an option"}
                    />
                </SelectTrigger>
                <SelectContent>
                    {options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
        </div>
    );
};

export default Select;
