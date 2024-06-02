import type { AmarantOrderModel } from './AmarantOrderModel';
export type AmarantPlacedOrderResultModel = {
    order: AmarantOrderModel;
    successUrl: string;
    metadata: Record<string, (string | number | boolean | Record<string, any> | null) | null>;
};
