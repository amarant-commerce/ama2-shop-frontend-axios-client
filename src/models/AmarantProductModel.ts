/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAttributeSwatchModel } from './AmarantAttributeSwatchModel';
import type { AmarantConfigurableProductModel } from './AmarantConfigurableProductModel';
import type { AmarantGenericProductModel } from './AmarantGenericProductModel';
import type { AmarantGroupedProductModel } from './AmarantGroupedProductModel';
import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantProductCategory } from './AmarantProductCategory';
import type { AmarantProductPrices } from './AmarantProductPrices';
import type { AmarantProductPricing } from './AmarantProductPricing';
export type AmarantProductModel = (AmarantGroupedProductModel | AmarantConfigurableProductModel | AmarantGenericProductModel | {
    type: string;
    id: number;
    url: string;
    path: string;
    scopedPath: string;
    sku: string;
    setId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    swatches: Array<AmarantAttributeSwatchModel>;
    prices: AmarantProductPrices;
    media: Array<AmarantImageModel>;
    categoryIds: Array<number>;
    categories: Array<AmarantProductCategory>;
    createdAt: string;
    updatedAt: string;
    pricingData?: AmarantProductPricing | null;
    regularPrice: number;
    lowestPrice: number;
});

