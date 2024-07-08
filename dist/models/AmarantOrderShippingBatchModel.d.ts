import type { AmarantOrderShippingBatchItemModel } from './AmarantOrderShippingBatchItemModel';
export type AmarantOrderShippingBatchModel = {
    id: string;
    addressId: string;
    addressFormatted?: string | null;
    rateCarrierCode: string;
    rateCarrierTitle: string;
    rateMethod: string;
    rateShippable: boolean;
    ratePrice: number;
    ratePriceFormatted: string;
    items: Array<AmarantOrderShippingBatchItemModel>;
};
