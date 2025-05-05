import type { AmarantProductConfigurationOptionModel } from './AmarantProductConfigurationOptionModel';
import type { AmarantProductModel } from './AmarantProductModel';
export type AmarantProductConfigurationModel = {
    id: number;
    options: Array<AmarantProductConfigurationOptionModel>;
    productId: number;
    productType: string;
    sku: string;
    product?: AmarantProductModel | null;
};
