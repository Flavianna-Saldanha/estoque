import { DateRangeInput } from "../validators/dashboard.validator";
export declare const getInventoryValue: () => Promise<number>;
export declare const getMovesSummary: (range: DateRangeInput) => Promise<{
    in: {
        value: number;
        count: number;
    };
    out: {
        value: number;
        count: number;
    };
}>;
export declare const getMovesGraph: (range: DateRangeInput) => Promise<{
    date: string;
    totalValue: number;
}[]>;
export declare const getLowStockProducts: () => Promise<{
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
}[]>;
export declare const getStagnantProducts: (range: DateRangeInput) => Promise<{
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
}[]>;
//# sourceMappingURL=dashboard.service.d.ts.map