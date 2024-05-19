/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartShippingInformationAddressInputDto } from './AmarantSalesCartShippingInformationAddressInputDto';
import type { AmarantSalesCartShippingInformationInputItemDto } from './AmarantSalesCartShippingInformationInputItemDto';
export type AmarantSalesCartShippingInformationInputDto = {
    deliveryMethodCode: string;
    deliveryMethodRateCode: string;
    orderItems: Array<AmarantSalesCartShippingInformationInputItemDto>;
    address?: AmarantSalesCartShippingInformationAddressInputDto | null;
    additionalData: Record<string, string | number | number | boolean | any[] | null>;
};

