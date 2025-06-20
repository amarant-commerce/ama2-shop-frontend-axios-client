/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSearchResultCategorySearchResultItemModel } from './AmarantSearchResultCategorySearchResultItemModel';
import type { AmarantSearchResultPostCategorySearchResultItemModel } from './AmarantSearchResultPostCategorySearchResultItemModel';
import type { AmarantSearchResultPostSearchResultItemModel } from './AmarantSearchResultPostSearchResultItemModel';
import type { AmarantSearchResultProductSearchResultItemModel } from './AmarantSearchResultProductSearchResultItemModel';
export type AmarantSearchResultModel = Array<{
    type?: string;
    results?: Array<(AmarantSearchResultProductSearchResultItemModel | AmarantSearchResultCategorySearchResultItemModel | AmarantSearchResultPostCategorySearchResultItemModel | AmarantSearchResultPostSearchResultItemModel)>;
}>;
