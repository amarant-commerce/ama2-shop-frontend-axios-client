import type { AmarantOrderAdjustmentModel } from './AmarantOrderAdjustmentModel';
import type { AmarantOrderCustomerModel } from './AmarantOrderCustomerModel';
import type { AmarantOrderItemModel } from './AmarantOrderItemModel';
import type { AmarantOrderPaymentModel } from './AmarantOrderPaymentModel';
import type { AmarantOrderShippingBatchModel } from './AmarantOrderShippingBatchModel';
import type { AmarantOrderTotalModel } from './AmarantOrderTotalModel';
export type AmarantOrderModel = {
    id: string;
    humanId: string;
    channelId: number;
    baseCurrency: string;
    currency: string;
    conversionRate?: string | null;
    physical: boolean;
    customer?: AmarantOrderCustomerModel | null;
    items: Array<AmarantOrderItemModel>;
    payments: Array<AmarantOrderPaymentModel>;
    shippingBatches: Array<AmarantOrderShippingBatchModel>;
    adjustments: Array<AmarantOrderAdjustmentModel>;
    totals: Array<AmarantOrderTotalModel>;
    createdAt: string;
    updatedAt: string;
};
