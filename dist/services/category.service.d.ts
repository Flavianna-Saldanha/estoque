import { NewCategory } from "../db/schema";
export declare const createCategory: (data: NewCategory) => Promise<{
    name: string;
    id: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const listCategories: (includeProductCount?: boolean) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    productCount: number;
}[] | {
    id: string;
    name: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getCategoryById: (id: string) => Promise<{
    id: string;
    name: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const updateCategory: (id: string, data: Partial<NewCategory>) => Promise<{
    id: string;
    name: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const deleteCategory: (id: string) => Promise<{
    id: string;
    name: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
//# sourceMappingURL=category.service.d.ts.map