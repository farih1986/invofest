import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/formInput";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";

type FormData = {
    name: string;
}
const schema = z.object({
    name: z.string().min(3, "Nama kategori minimal 3 karakter"),
});

export default function CreateCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create Category</h1>
            <p>Form untuk membuat kategori baru akan ditempatkan di sini.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    text="Category Name"
                    name="Category Name"
                    tipe="text"
                    register={register}
                    error={errors.name?.message}
                    placeholder="Masukkan nama kategori"
                />

                <Button
                    label="Simpan"
                    variant="primary"
                    type="submit"
                />
            </form>
        </div>
    );
}   