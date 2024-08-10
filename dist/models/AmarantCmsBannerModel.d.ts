import type { AmarantCmsBannerItemModel } from './AmarantCmsBannerItemModel';
export type AmarantCmsBannerModel = {
    id: number;
    active: boolean;
    identifier: string;
    scopes: Array<string>;
    items: Array<AmarantCmsBannerItemModel>;
    createdAt: string;
    updatedAt: string;
};
