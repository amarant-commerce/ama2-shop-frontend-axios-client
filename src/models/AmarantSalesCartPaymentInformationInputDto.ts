/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartPaymentInformationAddressInputDto } from './AmarantSalesCartPaymentInformationAddressInputDto';
export type AmarantSalesCartPaymentInformationInputDto = {
    method: string;
    orderItemIds: Array<string>;
    address: AmarantSalesCartPaymentInformationAddressInputDto;
    additionalData: Record<string, string | number | number | boolean | any[] | null>;
};

