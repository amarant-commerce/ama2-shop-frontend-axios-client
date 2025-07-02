import type { AmarantMediaAttributeValueModel } from './AmarantMediaAttributeValueModel';
export type AmarantAttributeSwatchModel = {
    code: string;
    label: string;
    type: string;
    swatch?: string | null;
    media?: AmarantMediaAttributeValueModel | null;
};
