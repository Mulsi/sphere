export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            Addresses: {
                Row: {
                    address: string | null
                    city: string | null
                    country: string | null
                    created_at: string
                    id: number
                    name: string | null
                    userId: string | null
                    zipcode: string | null
                }
                Insert: {
                    address?: string | null
                    city?: string | null
                    country?: string | null
                    created_at: string
                    id?: number
                    name?: string | null
                    userId?: string | null
                    zipcode?: string | null
                }
                Update: {
                    address?: string | null
                    city?: string | null
                    country?: string | null
                    created_at?: string
                    id?: number
                    name?: string | null
                    userId?: string | null
                    zipcode?: string | null
                }
                Relationships: []
            }
            OrderItem: {
                Row: {
                    created_at: string
                    id: number
                    order: number | null
                    orderId: number | null
                    product: number | null
                    productId: number | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    order?: number | null
                    orderId?: number | null
                    product?: number | null
                    productId?: number | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    order?: number | null
                    orderId?: number | null
                    product?: number | null
                    productId?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "OrderItem_order_fkey"
                        columns: ["order"]
                        isOneToOne: false
                        referencedRelation: "Orders"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "OrderItem_product_fkey"
                        columns: ["product"]
                        isOneToOne: false
                        referencedRelation: "Products"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Orders: {
                Row: {
                    address: string | null
                    city: string | null
                    country: string | null
                    created_at: string
                    id: number
                    name: string | null
                    stripeId: string | null
                    userId: string | null
                    zipcode: string | null
                }
                Insert: {
                    address?: string | null
                    city?: string | null
                    country?: string | null
                    created_at?: string
                    id?: number
                    name?: string | null
                    stripeId?: string | null
                    userId?: string | null
                    zipcode?: string | null
                }
                Update: {
                    address?: string | null
                    city?: string | null
                    country?: string | null
                    created_at?: string
                    id?: number
                    name?: string | null
                    stripeId?: string | null
                    userId?: string | null
                    zipcode?: string | null
                }
                Relationships: []
            }
            Products: {
                Row: {
                    created_at: string
                    description: string | null
                    id: number
                    price: number | null
                    title: string | null
                    url: string | null
                }
                Insert: {
                    created_at?: string
                    description?: string | null
                    id?: number
                    price?: number | null
                    title?: string | null
                    url?: string | null
                }
                Update: {
                    created_at?: string
                    description?: string | null
                    id?: number
                    price?: number | null
                    title?: string | null
                    url?: string | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
