import type { AmarantCmsBannerItemModel } from './AmarantCmsBannerItemModel';
export type AmarantCmsBannerModel = {
    id: number;
    active: boolean;
    identifier: string;
    items: Array<AmarantCmsBannerItemModel>;
    createdAt: string;
    updatedAt: string;
};
