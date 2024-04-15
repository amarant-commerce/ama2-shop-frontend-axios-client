/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCmsPageTagModel } from './AmarantCmsPageTagModel';
export type AmarantCmsPageModel = {
    id: number;
    identifier: string;
    title: string;
    content: string;
    uri: string;
    scopes: Array<string>;
    tags: Array<AmarantCmsPageTagModel>;
    createdAt: string;
    updatedAt: string;
};

