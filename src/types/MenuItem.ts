export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    created_at: Date;
    updated_at: Date;
}

export type CreateMenuItemPayload = Pick<MenuItem, 'name' | 'description' | 'price' | 'image_url'>;