import type { AmarantProductPricing } from './AmarantProductPricing';
export type AmarantProductPrices = {
    pricing: Array<AmarantProductPricing>;
    defaultPricing: AmarantProductPricing;
    defaultRegularPrice: number;
    defaultLowestPrice: number;
};
