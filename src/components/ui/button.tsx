import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@lib/utils";

const buttonVariants = cva(
    "appearance-none bg-transparent border-none m-0 shadow-none leading-none text-inherit font-inherit cursor-pointer focus:outline-none inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "font-heading text-lg bg-primary text-white px-4 py-1 no-underline [box-shadow:2px_-2px_0_2px_#4b9cff,_-2px_2px_0_2px_#004ba7,_0_0_0_4px_#0073ff] hover:[box-shadow:0_0_0_4px_#ffffff] mx-1 my-0",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "font-heading text-lg bg-[var(--color-card-background)] text-white px-4 py-1 no-underline [box-shadow:2px_-2px_0_2px_var(--color-card-background-light),_-2px_2px_0_2px_var(--color-card-background-dark),_0_0_0_4px_var(--color-card-background)] hover:[box-shadow:0_0_0_4px_#ffffff] mx-1 my-0",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-8 px-3",
                sm: "h-6 px-2 text-sm",
                lg: "h-12 px-4",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };

