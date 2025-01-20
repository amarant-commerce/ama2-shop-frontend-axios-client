import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
export type AmarantSalesCartItemInputCustomizableProductDto = {
    sku: string;
    parentSku: string;
    qty: number;
    type: 'customizable';
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};
