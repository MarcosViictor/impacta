import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' | 'active'
  size?: 'sm' | 'md' | 'lg'
  width?: 'auto' | 'full'
  className?: string
  as?: ElementType
  to?: string
  onClick?: () => void
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  width = 'auto',
  className = '',
  as: Component = 'button',
  children,
  ...props
}: ButtonProps) => {

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-10 py-2',
    lg: 'px-6 py-2.5 text-lg'
  }

  const widthStyles = {
    auto: 'w-auto',
    full: 'w-full'
  }

  const variantStyles = {
    primary: 'bg-blue-700 text-white border-transparent hover:bg-blue-800',
    secondary: 'bg-gray-600 text-white border-transparent hover:bg-gray-700',
    success: 'bg-green-500 text-white border-transparent hover:bg-green-600',
    warning: 'bg-yellow-500 text-gray-900 border-transparent hover:bg-yellow-600',
    danger: 'bg-red-600 text-white border-transparent hover:bg-red-700',
    info: 'bg-blue-400 text-white border-transparent hover:bg-blue-500',
    light: 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200',
    dark: 'bg-gray-900 text-white border-transparent hover:bg-gray-800',
    active: 'bg-gray-100 text-gray-900',
  }

  return (
    <Component
      className={`
        ${sizeStyles[size]}
        ${widthStyles[width]}
        ${variantStyles[variant]}
        font-semibold
        rounded-md
        transition-all
        duration-200 
        flex
        items-center
        justify-center
        text-center
        ${className}
        cursor-pointer
      `}
      {...props}
    >
      {children}
    </Component>
  )
}
