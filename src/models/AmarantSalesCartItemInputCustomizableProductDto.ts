/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
export type AmarantSalesCartItemInputCustomizableProductDto = {
    sku: string;
    parentSku: string;
    qty: number;
    type: 'customizable';
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};

