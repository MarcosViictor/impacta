
interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}       

export const Input = ({ label, placeholder, value, onChange, type, error }: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className="text-sm font-medium">{label}</label>

            <input
                id={label}
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full mt-1 border rounded-md p-2 ${error ? 'border-[#ef5252] border-2' : 'border-gray-300'}`} 
            />

            <p className="text-[#d01010] text-[0.8rem]">{error}</p>
        </div>
    )
}
