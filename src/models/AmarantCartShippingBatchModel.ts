/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCartShippingBatchItemModel } from './AmarantCartShippingBatchItemModel';
export type AmarantCartShippingBatchModel = {
    id: string;
    addressId: string;
    rateCarrierCode: string;
    rateCarrierTitle: string;
    rateMethod: string;
    rateShippable: boolean;
    ratePrice: number;
    items: Array<AmarantCartShippingBatchItemModel>;
};

