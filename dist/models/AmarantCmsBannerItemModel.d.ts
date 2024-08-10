import type { AmarantMediaModel } from './AmarantMediaModel';
export type AmarantCmsBannerItemModel = {
    id: number;
    active: boolean;
    sortOrder: number;
    primaryMedia: AmarantMediaModel;
    secondaryMedia?: AmarantMediaModel | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    createdAt: string;
    updatedAt: string;
};
