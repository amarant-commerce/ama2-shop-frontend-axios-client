import type { AmarantMediaAttributeValueModel } from './AmarantMediaAttributeValueModel';
export type AmarantProductConfigurationOptionModel = {
    code: string;
    label: string;
    value: string;
    valueLabel: string;
    swatchType?: string | null;
    swatch?: string | null;
    mediaSwatch?: AmarantMediaAttributeValueModel | null;
    sort: number;
};
