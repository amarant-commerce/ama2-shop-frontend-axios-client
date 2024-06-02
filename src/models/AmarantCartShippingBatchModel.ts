/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCartAddressModel } from './AmarantCartAddressModel';
import type { AmarantCartShippingBatchItemModel } from './AmarantCartShippingBatchItemModel';
export type AmarantCartShippingBatchModel = {
    id: string;
    address: AmarantCartAddressModel;
    rateCarrierCode: string;
    rateCarrierTitle: string;
    rateMethod: string;
    rateShippable: boolean;
    ratePrice: number;
    items: Array<AmarantCartShippingBatchItemModel>;
};

