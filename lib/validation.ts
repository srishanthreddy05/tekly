import { z } from "zod";

/**
 * Validation schema for the waitlist signup form.
 */
export const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be less than 50 characters." })
    .trim(),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .trim()
    .toLowerCase(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
