import { z } from "zod";

export const CreateUserSchema = z.object({
  firstname: z
    .string()
    .min(2, "Firstname should be at least 2 characters long"),
  lastname: z.string().min(1, "Lastname should be at least 1 characters long"),
  email: z.email("Invalid email address"),
  password: z.string().min(5, "Password should contain at least 5 characters"),
});

export type CreateUserPayload = z.infer<typeof CreateUserSchema>;
