import type { AmarantProductPriceItem } from './AmarantProductPriceItem';
export type AmarantProductPricing = {
    currencyCode: string;
    prices: Array<AmarantProductPriceItem>;
    regularPrice: number;
    lowestPrice: number;
    meta?: Record<string, (string | number | boolean | null)> | null;
};
