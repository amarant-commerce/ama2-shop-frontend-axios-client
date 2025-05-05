import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
export type AmarantSalesCartItemInputConfigurableProductDto = {
    sku: string;
    parentSku: string;
    qty: number;
    type: 'configurable';
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};
