import {z} from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        firstName: z.string({error: 'First name is required'}),
        lastName: z.string({error: 'Last name is required'}),
        username: z.string({error: 'Username is required'}),
        email: z.email({error: 'A valid email is required'}),
        password: z
            .string({error: 'Password is required'})
            .min(8, {message: 'Password must be at least 8 characters long'})
    }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>['body'];