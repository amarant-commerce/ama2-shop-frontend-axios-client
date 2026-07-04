import type { AmarantCmsBlockTagModel } from './AmarantCmsBlockTagModel';
export type AmarantCmsBlockModel = {
    id: number;
    identifier: string;
    active: boolean;
    title: string;
    content: string;
    scopes: Array<string>;
    tags: Array<AmarantCmsBlockTagModel>;
    createdAt: string;
    updatedAt: string;
};
