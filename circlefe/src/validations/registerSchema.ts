import { z } from "zod";

// const regexPassword =
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const registerSchema = z
  .object({
    fullname: z
      .string()
      .min(4, "fullname must be at least 4 character !")
      .max(20, "fullname max character is 20 character !"),
    email: z.string().email("input must be valid email"),
    password: z.string().min(4),
    // .regex(regexPassword, "Password must be include number,symbol, upercase and lowercase letters !")
  })
  .required();

export type RegisterSchema = z.infer<typeof registerSchema>;
