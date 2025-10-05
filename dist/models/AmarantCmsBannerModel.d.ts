import type { AmarantCmsBannerItemModel } from './AmarantCmsBannerItemModel';
export type AmarantCmsBannerModel = {
    id: number;
    active: boolean;
    identifier: string;
    autoplay: boolean;
    autoplayDelay: number;
    navigation: boolean;
    pagination: boolean;
    items: Array<AmarantCmsBannerItemModel>;
    createdAt: string;
    updatedAt: string;
};
