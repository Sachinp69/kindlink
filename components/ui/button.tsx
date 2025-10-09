import * as React from "react"
import { cn } from "@/lib/utils" // keep this for merging classes

// Define ButtonProps just like your snippet
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  asChild,
  ...props
}) => {
  const Comp = asChild ? "span" : "button"; // optional if you want Slot-style flexibility

  return (
    <Comp
      data-slot="button"
      className={cn(
        "bg-amber-600 hover:bg-amber-500 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export { Button };
