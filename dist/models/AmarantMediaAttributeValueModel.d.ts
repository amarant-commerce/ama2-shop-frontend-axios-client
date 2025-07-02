import type { AmarantImageModelVariant } from './AmarantImageModelVariant';
export type AmarantMediaAttributeValueModel = {
    id: number;
    type: AmarantMediaAttributeValueModel.type;
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
    variants: Array<AmarantImageModelVariant>;
};
export declare namespace AmarantMediaAttributeValueModel {
    enum type {
        IMAGE = "image",
        VIDEO = "video",
        FILE = "file"
    }
}
