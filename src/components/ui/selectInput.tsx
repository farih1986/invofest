interface SelectProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  register,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <select
        {...register(name)}
        className={`border px-3 py-2 rounded outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50"
            : "border-gray-300 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 bg-white"
        }`}
      >
        <option value="">Pilih...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};