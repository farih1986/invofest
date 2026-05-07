import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../components/ui/inputText";
import { TextArea } from "../components/ui/textArea";
import { Link } from "react-router-dom";

const schema = z.object({
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    alamat: z.string().min(5, "Alamat wajib di isi"),
    email: z.string().email("Email tidak valid"),
    bio: z.string().optional(),
});

type RegisterForm = z.infer<typeof schema>;

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-1">Registrasi</h1>
            <hr className="mb-6 border-gray-200" />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <InputText
                    label="Nama"
                    {...register("nama")}
                    error={errors.nama?.message}
                />
                <InputText
                    label="Alamat"
                    {...register("alamat")}
                    error={errors.alamat?.message}
                />
                <InputText
                    label="Email"
                    {...register("email")}
                    error={errors.email?.message}
                />

                <TextArea
                    label="Bio"
                    {...register("bio")}
                    error={errors.bio?.message}
                    placeholder="Tentang dirimu..."
                />

                <button
                    type="submit"
                    className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg mt-2 transition-all"
                >
                    Daftar
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-red-900 hover:underline">
                    Masuk di sini
                </Link>
            </p>
        </div>
    );
}