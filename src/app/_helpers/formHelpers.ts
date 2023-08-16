import { z } from 'zod';

/* ---------- Zod schema et TS type ----------*/

// Describe the correctness of data's form.
export const FormSchema = z.object({
 username: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  password: z.string().min(6),
});

// Infer the TS type according to the zod schema.
export type FormType = z.infer<typeof FormSchema>;
