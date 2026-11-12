import { NewMove } from "../db/schema";
import { ListMovesInput } from "../validators/move.validator";
export declare const addMove: (data: Omit<NewMove, "unitPrice">) => Promise<{
    type: "in" | "out";
    id: string;
    createdAt: Date;
    unitPrice: number;
    quantity: string;
    productId: string;
    userId: string;
}>;
export declare const listMoves: (filters: ListMovesInput) => Promise<{
    id: string;
    productId: string;
    productName: string | null;
    userId: string;
    type: "in" | "out";
    quantity: string;
    unitPrice: number;
    createdAt: Date;
}[]>;
//# sourceMappingURL=move.service.d.ts.map