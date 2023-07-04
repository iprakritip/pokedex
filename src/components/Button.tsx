import React from 'react'

interface ButtonProps{
    label:string;
    onClick:()=>void;
    className:string
}

const Button = ({label, onClick,className}:ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>{label}</button>
  )
}

export default Button