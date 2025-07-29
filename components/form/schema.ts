import z from "zod";

export const schema = z.object({
  email: z
    .string()
    .regex(
      /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$/,
      "Este no es un correo valido"
    ),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[0-9]/, "Debe contener al menos un número")
});