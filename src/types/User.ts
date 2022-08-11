import { z } from "zod";

export const UserValidator = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    type: z.string(),
    portfoio: z.array(z.string()),
    preference: z.number()
})

type User = z.infer<typeof UserValidator>;

export default User;
