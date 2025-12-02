/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductPricing } from './AmarantProductPricing';
export type AmarantProductPrices = {
    pricing: Array<AmarantProductPricing>;
    defaultPricing: AmarantProductPricing;
    /**
     * Deprecated, pending removal. Use properties defaultRegularPriceExTax abd defaultRegularPriceInclTax instead.
     * @deprecated
     */
    defaultRegularPrice: number;
    defaultRegularPriceExTax: number;
    defaultRegularPriceInclTax: number;
    /**
     * Deprecated, pending removal. Use properties defaultLowestPriceExTax abd defaultLowestPriceInclTax instead.
     * @deprecated
     */
    defaultLowestPrice: number;
    defaultLowestPriceExTax: number;
    defaultLowestPriceInclTax: number;
    /**
     * Is set to true if default lowest price is lower than default regular price.
     */
    onSale: boolean;
    defaultLowestHistoryPriceExTax?: number | null;
    defaultLowestHistoryPriceInclTax?: number | null;
    defaultLowestHistoryAge?: number | null;
};

