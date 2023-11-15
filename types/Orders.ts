import type { OrderItem } from "./OrderItem";
export interface Orders {
    id: number;
    uuid: string;
    stripeId: number;
    name: number;
    address: string;
    zipcode: number;
    city: string;
    country: string;
    created_at?: string;
    orderItem: OrderItem[];
}