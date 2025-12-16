import { FaPlus } from "react-icons/fa6";
import EmptyButton from "../../ui/empty-button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

interface AddObjectButtonProps {
    onAdd: (type: string) => void;
}

const AddObjectButton = ({ onAdd }: AddObjectButtonProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <EmptyButton
                    className="hover:bg-card-background-light p-0.5 rounded cursor-pointer outline-none data-[state=open]:bg-card-background-light"
                    aria-label="Add Object"
                >
                    <FaPlus size="24px" />
                </EmptyButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onAdd("job")}>
                    Job
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AddObjectButton;
