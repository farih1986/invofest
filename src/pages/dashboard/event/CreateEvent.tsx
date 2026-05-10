import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/formInput";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";

interface EventProps {
  name: string;
  category: string;
  location: string;
  date: string;
  description: string;
}

const schema = z.object({
  name: z.string().min(3, "Nama event minimal 3 karakter"),

  category: z
    .string()
    .min(3, "Kategori minimal 3 karakter"),

  location: z
    .string()
    .min(3, "Lokasi minimal 3 karakter"),

  date: z.string().min(1, "Tanggal wajib diisi"),

  description: z
    .string()
    .min(10, "Deskripsi minimal 10 karakter"),
});

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: EventProps) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Create New Event
      </h1>

      <p className="mb-4">
        Form untuk menambahkan event baru.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormInput
          text="Nama Event"
          name="name"
          tipe="text"
          register={register}
          error={errors.name?.message}
          placeholder="Masukkan nama event"
        />

        <FormInput
          text="Kategori"
          name="category"
          tipe="text"
          register={register}
          error={errors.category?.message}
          placeholder="Contoh: Seminar, Workshop"
        />

        <FormInput
          text="Lokasi"
          name="location"
          tipe="text"
          register={register}
          error={errors.location?.message}
          placeholder="Masukkan lokasi event"
        />

        <FormInput
          text="Tanggal"
          name="date"
          tipe="date"
          register={register}
          error={errors.date?.message}
        />

        <FormInput
          text="Deskripsi"
          name="description"
          tipe="text"
          register={register}
          error={errors.description?.message}
          placeholder="Masukkan deskripsi event"
        />

        <Button
          label="Simpan Event"
          variant="primary"
          type="submit"
        />
      </form>
    </div>
  );
}