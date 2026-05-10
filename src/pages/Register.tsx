import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "../components/ui/textArea";
import { Link } from "react-router-dom";
import FormInput from "../components/ui/formInput";

const schema = z.object({
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    alamat: z.string().min(5, "Alamat wajib di isi"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
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
                <FormInput
                    text="Nama"
                    name="nama"
                    tipe="text"
                    register={register}
                    error={errors.nama?.message}
                    placeholder="Masukkan nama"
                />
                <FormInput
                    text="Alamat"
                    name="alamat"
                    tipe="text"
                    register={register}
                    error={errors.alamat?.message}
                    placeholder="Masukkan alamat"
                />
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