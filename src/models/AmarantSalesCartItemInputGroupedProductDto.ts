/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
export type AmarantSalesCartItemInputGroupedProductDto = {
    sku: string;
    children: Array<AmarantSalesCartItemInputGenericProductDto>;
    type: 'grouped';
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};

