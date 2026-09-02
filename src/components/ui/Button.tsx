// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonStyles = cva(
  "inline-flex items-center justify-center font-bold rounded-card transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-primary-dark",
        secondary: "bg-white text-primary border-2 border-primary",
        ghost: "bg-transparent text-ink hover:bg-black/5",
        outline:
          "bg-white text-ink border border-gray-200 hover:border-gray-300",
      },
      size: {
        lg: "w-full py-3 text-base",
        md: "w-[80%] px-5 py-2.5 text-sm",
        sm: "w-[50%] px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonStyles({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
