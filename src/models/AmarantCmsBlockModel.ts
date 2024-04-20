/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCmsBlockTagModel } from './AmarantCmsBlockTagModel';
export type AmarantCmsBlockModel = {
    id: number;
    identifier: string;
    title: string;
    content: string;
    scopes: Array<string>;
    tags: Array<AmarantCmsBlockTagModel>;
    createdAt: string;
    updatedAt: string;
};

