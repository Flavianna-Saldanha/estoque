import z from "zod";
export declare const dateRangeSchema: z.ZodObject<{
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DateRangeInput = z.infer<typeof dateRangeSchema>;
//# sourceMappingURL=dashboard.validator.d.ts.map