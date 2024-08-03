/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantOrderModel } from './AmarantOrderModel';
import type { AmarantPlacedOrderResultPaymentRequestModel } from './AmarantPlacedOrderResultPaymentRequestModel';
export type AmarantPlacedOrderResultModel = {
    order: AmarantOrderModel;
    successUrl: string;
    paymentRequests: Array<AmarantPlacedOrderResultPaymentRequestModel>;
    metadata: Record<string, (string | number | boolean | Record<string, any> | null) | null>;
};

