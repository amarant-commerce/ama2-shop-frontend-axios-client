/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductPriceItem } from './AmarantProductPriceItem';
export type AmarantProductPricing = {
    currencyCode: string;
    prices: Array<AmarantProductPriceItem>;
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
    meta?: Record<string, (string | number | boolean | null)> | null;
};

