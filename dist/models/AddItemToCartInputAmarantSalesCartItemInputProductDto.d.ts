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
export declare namespace AddItemToCartInputAmarantSalesCartItemInputProductDto {
    enum type {
        GENERIC = "generic",
        GROUPED = "grouped",
        CONFIGURABLE = "configurable"
    }
}
