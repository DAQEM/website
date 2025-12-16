import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function EmptyButton({
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                "appearance-none bg-transparent border-none m-0 shadow-none leading-none text-inherit font-inherit cursor-pointer focus:outline-none",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
