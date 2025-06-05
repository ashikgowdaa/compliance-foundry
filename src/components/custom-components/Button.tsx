import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

type ButtonProps = {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: Variant;
  width?: 'auto' | 'full' | 'fit';
};



const variantClasses: Record<Variant, string> = {
    primary: 'bg-background-blue text-text-secondary border ',
    outline: 'bg-transparent text-black border border-black',
    secondary: 'bg-transparent text-blue-600 border border-blue-600',
    ghost: 'bg-transparent text-white border border-white ',
  };
  
  const widthClasses: Record<NonNullable<ButtonProps['width']>, string> = {
    auto: 'w-auto',
    full: 'w-full',
    fit: 'w-fit',
  };
  

const Button = ({
    title,
    className = '',
    style,
    variant = 'primary',
    width = 'auto',
  }: ButtonProps) => {
    return (
      <button
      className={`px-2 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold rounded-3xl cursor-pointer ${variantClasses[variant]} ${widthClasses[width]} ${className}`}
      style={style}
    >
      {title}
    </button>
    );
  };
  

export default Button