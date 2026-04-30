import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "../components/ui/formInput";
import Button from "../components/ui/button";
import { PasswordInput } from "../components/ui/passInput";
import { Textarea } from "../components/ui/textArea";
import { Select } from "../components/ui/selectInput";

const schema = z
  .object({
    nama: z.string().min(1, "nama harus diisi"),
    email: z.string().email("email tidak valid"),
    password: z.string().min(8, "password minimal 8 karakter"),
    confirmPassword: z.string().min(8, "minimal 8 karakter"),
    bio: z.string().optional(),
    event: z.string().min(1, "event harus dipilih"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password tidak sama",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1500));
    console.log("DATA VALID:", data);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md p-6">

          <h1 className="text-xl font-semibold text-center mb-4">
            Register Event
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormInput
              text="Nama"
              tipe="text"
              name="nama"
              register={register}
              error={errors.nama?.message}
            />

            <FormInput
              text="Email"
              tipe="email"
              name="email"
              register={register}
              error={errors.email?.message}
            />

            <PasswordInput
              label="Password"
              name="password"
              register={register}
              error={errors.password?.message}
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
            />

            <Textarea
              label="Bio"
              name="bio"
              register={register}
              error={errors.bio?.message}
            />

            <Select
              label="Event"
              name="event"
              register={register}
              error={errors.event?.message}
              options={[
                { label: "Invofest", value: "invofest" },
                { label: "Workshop AI", value: "ai" },
              ]}
            />

            <Button
              label={isSubmitting ? "Loading..." : "Register"}
              variant="primary"
              isLoading={isSubmitting}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}