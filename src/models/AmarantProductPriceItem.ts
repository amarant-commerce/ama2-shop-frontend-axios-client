/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantProductPriceItem = {
    type: AmarantProductPriceItem.type;
    code: string;
    scope?: string | null;
    price: number;
    salePrice: number;
    qty?: string | null;
    availableFrom?: string | null;
    availableTo?: string | null;
    meta?: Record<string, (string | number | boolean | null)> | null;
};
export namespace AmarantProductPriceItem {
    export enum type {
        GLOBAL = 'global',
        TARGETED = 'targeted',
    }
}

