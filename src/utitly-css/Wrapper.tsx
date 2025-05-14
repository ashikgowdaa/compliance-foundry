import React from 'react'

type Wrapper = {
    children: React.ReactNode,
    className?:string
}


const Wrapper = ({children, className}:Wrapper) => {
  return (
    <div className={` text-secondary px-2 py-2 ${className}`}>{children}</div>
  )
}

export default Wrapper