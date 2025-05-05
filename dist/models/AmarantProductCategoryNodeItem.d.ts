import type { AmarantMediaModel } from './AmarantMediaModel';
export type AmarantProductCategoryNodeItem = {
    id: number;
    name: string;
    url: string;
    path: string;
    scopedPath: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    swatches: Record<string, Record<string, any>>;
    media: Array<AmarantMediaModel>;
    children: Array<AmarantProductCategoryNodeItem>;
};
