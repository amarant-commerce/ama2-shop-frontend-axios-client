import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputProductOptionsDto } from './AmarantSalesCartItemInputProductOptionsDto';
export type AmarantSalesCartItemInputGroupedProductDto = {
    sku: string;
    children: Array<AmarantSalesCartItemInputGenericProductDto>;
    type: 'grouped';
    additionalData?: Array<AmarantSalesCartAdditionalDataInputDto>;
    productOptions?: Array<AmarantSalesCartItemInputProductOptionsDto>;
};
