import React from 'react'

type Wrapper = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties;
}

const Wrapper = ({children, className , style}:Wrapper) => {
  return (
    <div className={` text-secondary px-2 py-6 ${className}`} style={style}>{children}</div>
  )
}

export default Wrapper