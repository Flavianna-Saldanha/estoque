import z from "zod";
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const listUsersSchema: z.ZodObject<{
    offset: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const userIdSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    pasword: z.ZodOptional<z.ZodString>;
    isAdmin: z.ZodOptional<z.ZodBoolean>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
//# sourceMappingURL=user.validator.d.ts.map