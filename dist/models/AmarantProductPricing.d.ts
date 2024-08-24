import type { AmarantProductPriceItem } from './AmarantProductPriceItem';
export type AmarantProductPricing = {
    currencyCode: string;
    prices: Array<AmarantProductPriceItem>;
    /**
     * Deprecated, pending removal. Use properties regularPriceExTax abd regularPriceInclTax instead.
     * @deprecated
     */
    regularPrice: number;
    regularPriceExTax: number;
    regularPriceInclTax: number;
    /**
     * Deprecated, pending removal. Use properties lowestPriceExTax abd lowestPriceInclTax instead.
     * @deprecated
     */
    lowestPrice: number;
    lowestPriceExTax: number;
    lowestPriceInclTax: number;
    meta?: Record<string, (string | number | boolean | null)> | null;
};
