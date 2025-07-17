/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductWishlistProduct } from './AmarantProductWishlistProduct';
export type AmarantProductWishlist = {
    id: string;
    customerId: number;
    name: string;
    shared: boolean;
    items: Array<AmarantProductWishlistProduct>;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};

