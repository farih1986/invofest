interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false,
  className = "",
  onClick,
}) => {
  const baseStyle =
    "px-4 py-2 rounded font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyle = {
    primary: "bg-red-900 text-white hover:bg-red-800",
    outline: "border border-red-900 text-red-900 hover:bg-red-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;