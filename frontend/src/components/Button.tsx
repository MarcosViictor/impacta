import { ButtonHTMLAttributes, ElementType } from 'react'
import { theme, colors } from '@/static/styles/theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
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

  return (
    <Component
      className={`
        ${sizeStyles[size]}
        ${widthStyles[width]}
        font-semibold
        transition-all
        duration-200
        hover:shadow-md
        hover:brightness-110
        flex
        items-center
        justify-center
        text-center
        ${className}
      `}
      style={{
        borderRadius: theme.borderRadius.DEFAULT,
        backgroundColor: variant === 'primary' ? colors.blue[600] : colors.red[600],
        color: variant === 'secondary' ? '#FFFFFF' : '#FFFFFF'
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
