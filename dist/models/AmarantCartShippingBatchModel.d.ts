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
