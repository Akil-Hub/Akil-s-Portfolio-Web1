import React from 'react'

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  title?: string;
  size?: 'sm' | 'default' | 'lg';
  children?: React.ReactNode;
  type?:string;
  disabled?:boolean;
}

const Button = ({ className = '', onClick, title,type,disabled, size = 'default', children }: ButtonProps) => {
  const baseClasses = 'relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 active:scale-90 duration-200 transition-all '
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} onClick={onClick} title={title} >
      <span className=' relative h-5  flex items-center justify-center gap-2'>{children}</span>
    </button>
  )
}

export default Button