import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/formInput";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";

interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const schema = z.object({
  name: z.string().min(3, "Nama speaker minimal 3 karakter"),
  role: z.string().min(3, "Role minimal 3 karakter"),
  imageUrl: z.string().url("URL gambar tidak valid"),
});

export default function CreateSpeaker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpeakerCardProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SpeakerCardProps) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Speaker</h1>
      <p className="mb-4">
        Form untuk menambahkan speaker baru.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormInput
            text="Nama Speaker"
            name="name"
            tipe="text"
            register={register}
            error={errors.name?.message}
            placeholder="Masukkan nama speaker"
        />

        <FormInput
            text="Role / Jabatan"
            name="role"
            tipe="text"
            register={register}
            error={errors.role?.message}
            placeholder="Masukkan role atau jabatan speaker"
        />

        <FormInput
          text="Image URL"
          name="image Url"
          register={register}
          error={errors.imageUrl?.message}
          tipe="text"
          placeholder="Image URL"
        />

        <Button
          label="Simpan Speaker"
          variant="primary"
          type="submit"
        />
      </form>
    </div>
  );
}