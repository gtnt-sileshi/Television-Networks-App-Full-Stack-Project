import { z } from 'zod';

export const userSchema = z.object({
  phoneNumber: z.string().regex(/^[0-9]{10}$/, "Invalid phone number. It should be a 10-digit number."),
  password: z.string().min(8, "Password must be at least 8 characters long")
                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
