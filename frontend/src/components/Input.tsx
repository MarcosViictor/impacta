import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isFlex1?: boolean;
  fullWidth?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  isFlex1,
  fullWidth,
  ...rest
}: InputProps) => {
  return (
    <div
      className={`flex flex-col gap-1 ${
        isFlex1 ? "flex-1" : ""
      } ${fullWidth ? "w-full" : ""}`}
    >
      {label && (
        <label htmlFor={label} className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 border rounded-md p-2 ${
          error ? "border-[#ef5252] border-2" : "border-gray-300"
        } ${fullWidth ? "w-full" : ""}`}
        {...rest}
      />

      {error && <p className="text-[#d01010] text-[0.8rem]">{error}</p>}
    </div>
  );
};
