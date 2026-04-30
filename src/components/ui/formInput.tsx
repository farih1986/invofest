import LabelInput from "./labelInput";
import InputText from "./inputText";

interface formInputProps {
    text: string;
    tipe: string;
    name: string;
    register?: any;
    error?:string
};

const FormInput: React.FC<formInputProps> = ({ text, tipe, name, register, error }) => {
    return (
        <div className="flex flex-col gap-1">
            <LabelInput text={name} title={name} />
            <InputText tipe={tipe} name={text} {...register(name)} />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default FormInput;