import type { AmarantSearchResultCategorySearchResultItemModel } from './AmarantSearchResultCategorySearchResultItemModel';
import type { AmarantSearchResultProductSearchResultItemModel } from './AmarantSearchResultProductSearchResultItemModel';
export type AmarantSearchResultModel = Array<{
    type?: string;
    results?: Array<(AmarantSearchResultProductSearchResultItemModel | AmarantSearchResultCategorySearchResultItemModel)>;
}>;
