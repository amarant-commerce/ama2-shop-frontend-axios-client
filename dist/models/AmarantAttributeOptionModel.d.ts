import type { AmarantMediaAttributeValueModel } from './AmarantMediaAttributeValueModel';
export type AmarantAttributeOptionModel = {
    id: string;
    attributeId: number;
    label: string;
    /**
     * Label for current scope and scope code.
     */
    scopedLabel: string;
    scopedLabels: Record<string, any>;
    swatchType?: string | null;
    swatch: (string | null | AmarantMediaAttributeValueModel | null);
    position: number;
    linkedOptionId?: number | null;
};
