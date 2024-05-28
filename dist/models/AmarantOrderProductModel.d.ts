import type { AmarantImageModel } from './AmarantImageModel';
export type AmarantOrderProductModel = {
    id: number;
    sku: string;
    masterSku?: string | null;
    type: string;
    name: string;
    description?: string | null;
    basePrice: number;
    url: string;
    images: Array<AmarantImageModel>;
};
