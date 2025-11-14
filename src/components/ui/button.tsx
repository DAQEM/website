import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(
                "border-0 font-heading text-lg bg-primary text-white px-4 py-1 no-underline [box-shadow:2px_-2px_0_2px_#4b9cff,_-2px_2px_0_2px_#004ba7,_0_0_0_4px_#0073ff] hover:[box-shadow:0_0_0_4px_#ffffff] mx-1 my-0",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
