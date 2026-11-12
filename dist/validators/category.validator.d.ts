import z from "zod";
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const listCategoriesSchema: z.ZodObject<{
    includeProductCount: z.ZodDefault<z.ZodOptional<z.ZodCoercedBoolean<unknown>>>;
}, z.core.$strip>;
export declare const categoryIdSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.core.$strip>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=category.validator.d.ts.map