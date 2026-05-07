import React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({ label, error, ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            <input
                {...props}
                className={`border px-3 py-2 rounded outline-none transition-all ${
                    error
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-blue-200"
                }`}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default InputText;