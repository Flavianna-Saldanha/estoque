import z from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    categoryId: z.ZodUUID;
    unitPrice: z.ZodNumber;
    unitType: z.ZodEnum<{
        kg: "kg";
        g: "g";
        l: "l";
        ml: "ml";
        un: "un";
    }>;
    quantity: z.ZodPipe<z.ZodDefault<z.ZodCoercedNumber<unknown>>, z.ZodTransform<string, number>>;
    minimumQuantity: z.ZodPipe<z.ZodDefault<z.ZodCoercedNumber<unknown>>, z.ZodTransform<string, number>>;
    maximumQuantity: z.ZodPipe<z.ZodDefault<z.ZodCoercedNumber<unknown>>, z.ZodTransform<string, number>>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodUUID>;
    unitPrice: z.ZodOptional<z.ZodNumber>;
    unitType: z.ZodOptional<z.ZodEnum<{
        kg: "kg";
        g: "g";
        l: "l";
        ml: "ml";
        un: "un";
    }>>;
    quantity: z.ZodPipe<z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>, z.ZodTransform<string, number | undefined>>;
    minimumQuantity: z.ZodPipe<z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>, z.ZodTransform<string, number | undefined>>;
    maximumQuantity: z.ZodPipe<z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>, z.ZodTransform<string, number | undefined>>;
}, z.core.$strip>;
export declare const listProductsSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const productIdSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.core.$strip>;
//# sourceMappingURL=product.validator.d.ts.map