import { z } from 'zod';

export const newFormSchema = z.object({
  name: z.string().min(2),
  company_name: z.string().min(2),
  email: z.string().email(),
  phone_number: z.number().optional().default(0),
  message: z.string().min(10),
});
export type NewFormSchema = typeof newFormSchema;
