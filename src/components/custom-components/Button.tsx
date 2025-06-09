import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: Variant;
  width?: "auto" | "full" | "fit" | "half";
  onClick?: () => void;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#2D69FF] via-[#2A4EAA]  via-[#4C73D4] to-[#1E58E9] text-text-secondary border",
  outline: "bg-transparent text-black border border-black",
  secondary: "bg-transparent text-blue-600 border border-blue-600",
  ghost: "bg-transparent text-white border border-white ",
};

const widthClasses: Record<NonNullable<ButtonProps["width"]>, string> = {
  auto: "w-auto",
  full: "w-full",
  fit: "w-fit",
  half: "w-1/2",
};

const Button = ({
  title,
  className = "",
  style,
  variant = "primary",
  width = "auto",
  onClick
}: ButtonProps) => {
  return (
    <button
     onClick={onClick}
      className={`px-4 py-2 sm:px-7 sm:py-4 text-xs sm:text-[1rem] font-normal rounded-full cursor-pointer ${variantClasses[variant]} ${widthClasses[width]} ${className}`}
      style={style}
    >
      {title}
    </button>
  );
};

export default Button;
