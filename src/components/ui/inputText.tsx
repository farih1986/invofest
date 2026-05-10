import React from "react";

interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  tipe?: string;
}

const InputText: React.FC<InputTextProps> = ({
  error,
  tipe,
  ...props
}) => {
  return (
    <input
      type={tipe}
      {...props}
      className={`border px-3 py-2 rounded outline-none transition-all ${
        error
          ? "border-red-500 focus:ring-1 focus:ring-red-500"
          : "border-gray-300 focus:ring-2 focus:ring-blue-200"
      }`}
    />
  );
};

export default InputText;