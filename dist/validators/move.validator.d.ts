import z from "zod";
export declare const createMoveSchema: z.ZodObject<{
    productId: z.ZodUUID;
    type: z.ZodEnum<{
        in: "in";
        out: "out";
    }>;
    quantity: z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<string, number>>;
}, z.core.$strip>;
export declare const listMovesSchema: z.ZodObject<{
    productId: z.ZodOptional<z.ZodUUID>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type ListMovesInput = z.infer<typeof listMovesSchema>;
//# sourceMappingURL=move.validator.d.ts.map