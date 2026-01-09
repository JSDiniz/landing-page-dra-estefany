import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(3, "Nome obrigatório"),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  phone: z
    .string()
    .min(15, "Telefone obrigatório")
    .transform((val) => val.replace(/\D/g, "")),
  city: z.string().min(1, "Cidade obrigatória"),
  service: z.string().min(1, "Serviço obrigatório"),
  date: z.string().min(1, "Data obrigatória"),
  time: z.string().min(1, "Horário obrigatório"),
  message: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
