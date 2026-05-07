import { forwardRef } from "react";

interface TextAreaProps {
  label: string;
  error?: string;
  placeholder?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="font-medium">{label}</label>

        <textarea
          ref={ref}
          {...props}
          placeholder={placeholder}
          className={`border rounded px-3 py-2 min-h-25 outline-none transition-all ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50"
              : "border-gray-300 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 bg-white"
          }`}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";