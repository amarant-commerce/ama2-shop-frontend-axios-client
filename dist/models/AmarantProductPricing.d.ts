import type { AmarantProductPriceItem } from './AmarantProductPriceItem';
export type AmarantProductPricing = {
    currencyCode: string;
    prices: Record<string, Array<AmarantProductPriceItem>>;
    /**
     * Deprecated, pending removal. Use properties regularPriceExTax and regularPriceInclTax instead.
     * @deprecated
     */
    regularPrice: number;
    regularPriceExTax: number;
    regularPriceInclTax: number;
    /**
     * Deprecated, pending removal. Use properties lowestPriceExTax and lowestPriceInclTax instead.
     * @deprecated
     */
    lowestPrice: number;
    lowestPriceExTax: number;
    lowestPriceInclTax: number;
    lowestHistoryPriceExTax?: number | null;
    lowestHistoryPriceInclTax?: number | null;
    lowestHistoryAge?: number | null;
    meta?: Record<string, (string | number | boolean | null)> | null;
};
