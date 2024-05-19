/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantFrameworkEntityPersonAddress } from './AmarantFrameworkEntityPersonAddress';
export type AmarantEstimatedShippingRateModel = {
    identifier: string;
    carrierCode: string;
    carrierTitle: string;
    method: string;
    shippable: boolean;
    price: number;
    shortDescription?: string | null;
    description?: string | null;
    informativeDeliveryAddress?: AmarantFrameworkEntityPersonAddress | null;
};

