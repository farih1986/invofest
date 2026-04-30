interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    tipe: string;
    name: string;
    error?:string;

}

const InputText: React.FC<InputTextProps> = ({ tipe, name, error,...props }) => {
    return (
        <input 
        type={tipe} 
        name={name}
        {...props}

        className={`border p-2 rounded ${error ? "border-red-500" : "border-gray-300"}`}
        
        />
    );
};

export default InputText;