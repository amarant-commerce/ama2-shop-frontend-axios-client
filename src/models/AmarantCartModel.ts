/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCartAdjustmentModel } from './AmarantCartAdjustmentModel';
import type { AmarantCartCustomerModel } from './AmarantCartCustomerModel';
import type { AmarantCartItemModel } from './AmarantCartItemModel';
import type { AmarantCartPaymentModel } from './AmarantCartPaymentModel';
import type { AmarantCartShippingBatchModel } from './AmarantCartShippingBatchModel';
import type { AmarantCartTotalModel } from './AmarantCartTotalModel';
export type AmarantCartModel = {
    id: string;
    channelId: number;
    channelScopeId: number;
    channel: string;
    baseCurrency: string;
    currency: string;
    conversionRate?: string | null;
    physical: boolean;
    customer?: AmarantCartCustomerModel | null;
    items: Array<AmarantCartItemModel>;
    payments: Array<AmarantCartPaymentModel>;
    shippingBatches: Array<AmarantCartShippingBatchModel>;
    adjustments: Array<AmarantCartAdjustmentModel>;
    totals: Array<AmarantCartTotalModel>;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    allowedActions: Array<string>;
    email: (string | null | Array<string> | null);
    appliedCouponCodes: Array<string>;
    createdAt: string;
    updatedAt: string;
    baseGrandTotal: number;
    baseGrandTotalFormatted: string;
    grandTotal: number;
    grandTotalFormatted: string;
};

