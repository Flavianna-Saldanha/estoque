import { NewProduct } from "../db/schema";
export declare const createProduct: (data: NewProduct) => Promise<{
    name: string;
    id: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
    unitPrice: number;
    unitType: "kg" | "g" | "l" | "ml" | "un";
    quantity: string;
    minimumQuantity: string;
    maximumQuantity: string;
} | null>;
export declare const updateProduct: (id: string, data: Partial<NewProduct>) => Promise<{
    id: string;
    name: string;
    categoryId: string;
    unitPrice: number;
    unitType: "kg" | "g" | "l" | "ml" | "un";
    quantity: string;
    minimumQuantity: string;
    maximumQuantity: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const deleteProduct: (id: string) => Promise<{
    id: string;
    name: string;
    categoryId: string;
    unitPrice: number;
    unitType: "kg" | "g" | "l" | "ml" | "un";
    quantity: string;
    minimumQuantity: string;
    maximumQuantity: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const listProducts: (offset?: number, limit?: number, name?: string) => Promise<{
    id: string;
    name: string;
    categoryId: string;
    categoryName: string | null;
    unitPrice: number;
    unitType: "kg" | "g" | "l" | "ml" | "un";
    quantity: string;
    minimumQuantity: string;
    maximumQuantity: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getProductByIdWithDetails: (id: string) => Promise<{
    id: string;
    name: string;
    categoryId: string;
    categoryName: string | null;
    unitPrice: number;
    unitType: "kg" | "g" | "l" | "ml" | "un";
    quantity: string;
    minimumQuantity: string;
    maximumQuantity: string;
    createdAt: Date;
    updatedAt: Date;
} | null>;
//# sourceMappingURL=product.service.d.ts.map