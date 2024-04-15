import type { AmarantProductCustomizationOptionModel } from './AmarantProductCustomizationOptionModel';
import type { AmarantProductModel } from './AmarantProductModel';
export type AmarantProductCustomizationModel = {
    id: number;
    options: Array<AmarantProductCustomizationOptionModel>;
    productId: number;
    productType: string;
    sku: string;
    product?: AmarantProductModel | null;
};
