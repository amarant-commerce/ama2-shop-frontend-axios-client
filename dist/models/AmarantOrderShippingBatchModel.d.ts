import type { AmarantOrderShippingBatchItemModel } from './AmarantOrderShippingBatchItemModel';
export type AmarantOrderShippingBatchModel = {
    id: string;
    addressId: string;
    rateCarrierCode: string;
    rateCarrierTitle: string;
    rateMethod: string;
    rateShippable: boolean;
    ratePrice: number;
    items: Array<AmarantOrderShippingBatchItemModel>;
};
