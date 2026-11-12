import { NewUser, User } from "../db/schema";
export declare const login: (email: string, password: string) => Promise<{
    token: string;
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    isAdmin: boolean;
} | null>;
export declare const logout: (token: string) => Promise<void>;
export declare const createUser: (data: NewUser) => Promise<{
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    isAdmin: boolean;
}>;
export declare const listUsers: (offset?: number, limit?: number) => Promise<{
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    isAdmin: boolean;
}[]>;
export declare const deleteUser: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    isAdmin: boolean;
    token: string | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateUser: (id: string, data: Partial<NewUser>) => Promise<{
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    isAdmin: boolean;
} | null>;
export declare const validateToken: (token: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    isAdmin: boolean;
    token: string | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const getUserById: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    isAdmin: boolean;
    token: string | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const getUserByIdPublic: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    isAdmin: boolean;
} | null>;
export declare const getUserByEmail: (email: string, includeDeleted?: boolean) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    isAdmin: boolean;
    token: string | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const verifyPassword: (password: string, hash: string) => Promise<boolean>;
export declare const formatUser: (user: User) => {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    isAdmin: boolean;
};
//# sourceMappingURL=user.service.d.ts.map