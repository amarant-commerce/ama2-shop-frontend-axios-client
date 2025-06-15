/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantBlogPostAuthorModel } from './AmarantBlogPostAuthorModel';
import type { AmarantBlogPostCategoryModel } from './AmarantBlogPostCategoryModel';
import type { AmarantBlogPostTagModel } from './AmarantBlogPostTagModel';
import type { AmarantBlogPostVersionModel } from './AmarantBlogPostVersionModel';
export type AmarantBlogPostModel = {
    id: number;
    categories: Array<AmarantBlogPostCategoryModel>;
    tags: Array<AmarantBlogPostTagModel>;
    author?: AmarantBlogPostAuthorModel | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    content?: AmarantBlogPostVersionModel | null;
    createdAt: string;
    updatedAt: string;
};

