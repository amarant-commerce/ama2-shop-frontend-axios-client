import type { AmarantProductWishlistProduct } from './AmarantProductWishlistProduct';
export type AmarantProductWishlist = {
    id: string;
    customerId: number;
    name: string;
    shared: boolean;
    items: Array<AmarantProductWishlistProduct>;
};
