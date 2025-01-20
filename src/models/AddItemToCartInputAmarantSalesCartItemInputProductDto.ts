/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputCustomizableProductDto } from './AmarantSalesCartItemInputCustomizableProductDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputGroupedProductDto } from './AmarantSalesCartItemInputGroupedProductDto';
export type AddItemToCartInputAmarantSalesCartItemInputProductDto = (AmarantSalesCartItemInputGenericProductDto | AmarantSalesCartItemInputGroupedProductDto | AmarantSalesCartItemInputCustomizableProductDto | {
    type: AddItemToCartInputAmarantSalesCartItemInputProductDto.type;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
});
export namespace AddItemToCartInputAmarantSalesCartItemInputProductDto {
    export enum type {
        GENERIC = 'generic',
        GROUPED = 'grouped',
        CUSTOMIZABLE = 'customizable',
    }
}

