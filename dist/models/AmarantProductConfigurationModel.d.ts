import type { AmarantProductConfigurationOptionModel } from './AmarantProductConfigurationOptionModel';
export type AmarantProductConfigurationModel = {
    id: number;
    options: Array<AmarantProductConfigurationOptionModel>;
    productId: number;
    productType: string;
    sku: string;
};
