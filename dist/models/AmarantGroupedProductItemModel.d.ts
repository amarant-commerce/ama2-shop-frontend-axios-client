import type { AmarantProductModel } from './AmarantProductModel';
export type AmarantGroupedProductItemModel = {
    id: number;
    type: string;
    sku: string;
    product?: AmarantProductModel | null;
};
