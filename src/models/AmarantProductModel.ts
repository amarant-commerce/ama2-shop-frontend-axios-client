/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCustomizableProductModel } from './AmarantCustomizableProductModel';
import type { AmarantGenericProductModel } from './AmarantGenericProductModel';
import type { AmarantGroupedProductModel } from './AmarantGroupedProductModel';
import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantProductCategory } from './AmarantProductCategory';
import type { AmarantProductPrices } from './AmarantProductPrices';
import type { AmarantProductPricing } from './AmarantProductPricing';
export type AmarantProductModel = (AmarantGroupedProductModel | AmarantCustomizableProductModel | AmarantGenericProductModel | {
    type: string;
    id: number;
    url: string;
    path: string;
    scopedPath: string;
    sku: string;
    setId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
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

