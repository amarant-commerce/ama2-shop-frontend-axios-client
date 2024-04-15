import type { AmarantCartShippingRateModel } from './AmarantCartShippingRateModel';
export type AmarantCartShippingBatchModel = {
    id: string;
    addressId: string;
    shippingRate: AmarantCartShippingRateModel;
};
