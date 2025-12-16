import EmptyButton from "@/components/ui/empty-button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import { useGenerator } from "../../application/generator-context";

export const AddObjectButton = () => {
    const { availableTypes, addObject } = useGenerator();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <EmptyButton
                    className="bg-transparent hover:bg-card-background-light p-0.5 rounded cursor-pointer outline-none data-[state=open]:bg-card-background-light"
                    aria-label="Add Object"
                >
                    <Plus size="24px" />
                </EmptyButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {availableTypes.map((t) => (
                    <DropdownMenuItem
                        key={t.type}
                        onClick={() => addObject(t.type)}
                    >
                        {t.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
