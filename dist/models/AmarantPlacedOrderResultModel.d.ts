import type { AmarantOrderModel } from './AmarantOrderModel';
export type AmarantPlacedOrderResultModel = {
    order: AmarantOrderModel;
    metadata: Record<string, (string | number | boolean | Record<string, any> | null) | null>;
};
