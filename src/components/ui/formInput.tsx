import LabelInput from "./labelInput";
import InputText from "./inputText";

interface FormInputProps {
  text: string;
  tipe: string;
  name: string;
  register?: any;
  error?: string;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  text,
  tipe,
  name,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <LabelInput text={text} title={name} />

      <InputText
        tipe={tipe}
        name={name}
        placeholder={placeholder}
        error={error}
        {...register(name)}
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;