import { ButtonHTMLAttributes, ElementType } from 'react'
import { theme, colors } from '@/static/styles/theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
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

  const getVariantStyles = (variant: string) => {
    const styles = {
      primary: {
        bg: colors.blue[700],
        text: '#FFFFFF',
        border: 'none'
      },
      secondary: {
        bg: colors.gray[600],
        text: '#FFFFFF',
        border: 'none'
      },
      success: {
        bg: '#22C55E',
        text: '#FFFFFF',
        border: 'none'
      },
      warning: {
        bg: colors.yellow[500],
        text: '#1F2937',
        border: 'none'
      },
      danger: {
        bg: colors.red[600],
        text: '#FFFFFF',
        border: 'none'
      },
      info: {
        bg: colors.blue[400],
        text: '#FFFFFF',
        border: 'none'
      },
      light: {
        bg: colors.gray[100],
        text: colors.gray[900],
        border: `1px solid ${colors.gray[300]}`
      },
      dark: {
        bg: colors.gray[900],
        text: '#FFFFFF',
        border: 'none'
      }
    }

    return styles[variant as keyof typeof styles] || styles.primary
  }

  const variantStyle = getVariantStyles(variant)

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
        cursor-pointer
      `}
      style={{
        borderRadius: theme.borderRadius.DEFAULT,
        backgroundColor: variantStyle.bg,
        color: variantStyle.text,
        border: variantStyle.border
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
