export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    admin?: boolean;
    created_at: Date;
    updated_at: Date;
}

export type UpdateUserPayload = Partial<Omit<User, 'id' | 'created_at' | 'updated_at' | 'admin'> & {
    password?: string;
    admin?: boolean;
}>;
export type FetchUser = Pick<User, 'id' | 'username' | 'first_name' | 'last_name' | 'email' | 'admin'>;
