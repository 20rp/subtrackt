import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center transition-all active:scale-[0.98] font-bold cursor-pointer";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 rounded-xl",
    secondary:
      "bg-transparent border border-gray-800 text-white hover:bg-gray-900 rounded-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
