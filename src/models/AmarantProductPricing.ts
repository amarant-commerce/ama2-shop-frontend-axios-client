/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductPriceItem } from './AmarantProductPriceItem';
export type AmarantProductPricing = {
    currencyCode: string;
    prices: Array<AmarantProductPriceItem>;
    regularPrice: number;
    lowestPrice: number;
    meta?: Record<string, (string | number | boolean | null)> | null;
};

