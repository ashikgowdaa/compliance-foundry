import React from 'react'

type WrapperProps = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, className, style }, ref) => {
    return (
      <div ref={ref} className={` text-secondary px-2 py-6 ${className}`} style={style}  > {children}</div>
    );
  }
);


export default Wrapper