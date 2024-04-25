import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import ButtonSvg from "../SVG/ButtonSvg";

const buttonVariants = cva(
  "relative inline-flex h-11 items-center justify-center whitespace-nowrap px-7 font-code text-xs font-bold transition-colors hover:text-color-1",
  {
    variants: {
      variant: {
        default: "text-n-1",
        white: "text-n-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <span className="z-2">{children}</span>
        <ButtonSvg white={variant === "white"} />
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
