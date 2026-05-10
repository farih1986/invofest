import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/ui/formInput";


type LoginForm = z.infer<typeof schema>;
type FormData = {
    email: string;
    password: string;
}
const schema = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-1">Login</h1>
            <hr className="mb-6 border-gray-200" />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormInput
                    text="Email"
                    name="email"
                    tipe="email"
                    register={register}
                    error={errors.email?.message}
                    placeholder="Masukkan email"
                />

                <FormInput
                    text="Password"
                    name="password"
                    tipe="password"
                    register={register}
                    error={errors.password?.message}
                    placeholder="Masukkan password"
                />

                <button
                    type="submit"
                    className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg mt-2"
                >
                    Login
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
                Belum punya akun?{" "}
                <a href="/register" className="text-red-900 hover:underline">
                    Daftar di sini
                </a>
            </p>
        </div>
    );
}