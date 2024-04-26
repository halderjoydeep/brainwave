import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import ButtonSvg from "../SVG/ButtonSvg";

const buttonVariants = cva(
  "relative inline-flex h-11 items-center justify-center whitespace-nowrap px-7 font-code text-xs font-bold uppercase tracking-wider transition-colors hover:text-color-1",
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
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, className }));
    const content = (
      <>
        <span className="z-2">{children}</span>
        <ButtonSvg white={variant === "white"} />
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button className={classes} {...props} ref={ref}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
