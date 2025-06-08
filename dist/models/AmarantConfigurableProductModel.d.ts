import type { AmarantAttributeSwatchModel } from './AmarantAttributeSwatchModel';
import type { AmarantMediaModel } from './AmarantMediaModel';
import type { AmarantParentProductInventory } from './AmarantParentProductInventory';
import type { AmarantProductCategory } from './AmarantProductCategory';
import type { AmarantProductConfigurationModel } from './AmarantProductConfigurationModel';
import type { AmarantProductPrices } from './AmarantProductPrices';
import type { AmarantProductPricing } from './AmarantProductPricing';
export type AmarantConfigurableProductModel = {
    configurations: Array<AmarantProductConfigurationModel>;
    inventory: AmarantParentProductInventory;
    type: 'configurable';
    id: number;
    url: string;
    path: string;
    scopedPath: string;
    sku: string;
    setId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    swatches: Array<AmarantAttributeSwatchModel>;
    prices: AmarantProductPrices;
    media: Array<AmarantMediaModel>;
    categoryIds: Array<number>;
    categories: Array<AmarantProductCategory>;
    /**
     * Position within a category. Currently always 0.
     */
    position: number;
    createdAt: string;
    updatedAt: string;
    pricingData?: AmarantProductPricing | null;
    regularPrice: number;
    lowestPrice: number;
};
