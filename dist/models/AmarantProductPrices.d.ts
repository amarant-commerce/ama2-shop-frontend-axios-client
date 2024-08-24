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
};
