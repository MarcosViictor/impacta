import { SelectHTMLAttributes, ReactNode } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  fullWidth?: boolean;
  error?: string;
  placeholder?: string;
  icon?: ReactNode;
}

export const Select = ({
  label,
  options,
  fullWidth = false,
  error,
  placeholder,
  icon,
  className,
  ...props
}: SelectProps) => {
  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <select
          className={`
            border border-gray-300 rounded-md px-3 py-2 
            ${icon ? "pl-10" : ""}
            ${fullWidth ? "w-full" : ""}
            ${error ? "border-red-500" : ""}
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
            appearance-none bg-white
            ${className || ""}
          `}
          {...props}
        >
          <option value="" disabled>
            {placeholder || `Selecione ${label.toLowerCase()}`}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </div>
  );
};
