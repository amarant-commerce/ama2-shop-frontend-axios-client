import type { AmarantProductWishlistProduct } from './AmarantProductWishlistProduct';
export type AmarantProductWishlist = {
    id: string;
    customerId: number;
    name: string;
    products: Array<AmarantProductWishlistProduct>;
};
