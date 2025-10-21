/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputConfigurableProductDto } from './AmarantSalesCartItemInputConfigurableProductDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputGroupedProductDto } from './AmarantSalesCartItemInputGroupedProductDto';
import type { AmarantSalesCartItemInputProductOptionsDto } from './AmarantSalesCartItemInputProductOptionsDto';
export type AddItemToCartInputAmarantSalesCartItemInputProductDto = (AmarantSalesCartItemInputGenericProductDto | AmarantSalesCartItemInputGroupedProductDto | AmarantSalesCartItemInputConfigurableProductDto | {
    type: AddItemToCartInputAmarantSalesCartItemInputProductDto.type;
    additionalData?: Array<AmarantSalesCartAdditionalDataInputDto>;
    productOptions?: Array<AmarantSalesCartItemInputProductOptionsDto>;
});
export namespace AddItemToCartInputAmarantSalesCartItemInputProductDto {
    export enum type {
        GENERIC = 'generic',
        GROUPED = 'grouped',
        CONFIGURABLE = 'configurable',
    }
}

