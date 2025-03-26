import { FC } from 'react'

interface CardNumbersProps {
  number: number
  label: string
  className?: string
}

export const CardNumbers: FC<CardNumbersProps> = ({ 
  number = 1250, 
  label = "Animais Resgatados",
  className = ""
}) => {
  return (
    <div 
      className={`
        rounded-lg 
        p-4 
        flex 
        flex-col 
        items-start 
        justify-center
        w-[240px]
        border-3
        border-beige-100
        ${className}
      `}
    >
      <span className="text-2xl font-bold text-gray-900">
        {number.toLocaleString()}
      </span>
      <span className="text-gray-500 text-sm mt-1">
        {label}
      </span>
    </div>
  )
}
