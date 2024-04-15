import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
export type AmarantSalesCartItemInputGroupedProductDto = {
    sku: string;
    children: Array<AmarantSalesCartItemInputGenericProductDto>;
    type: 'grouped';
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};
