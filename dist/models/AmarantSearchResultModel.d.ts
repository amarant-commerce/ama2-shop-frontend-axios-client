import type { AmarantSearchResultCategorySearchResultItemModel } from './AmarantSearchResultCategorySearchResultItemModel';
import type { AmarantSearchResultPostCategorySearchResultItemModel } from './AmarantSearchResultPostCategorySearchResultItemModel';
import type { AmarantSearchResultPostSearchResultItemModel } from './AmarantSearchResultPostSearchResultItemModel';
import type { AmarantSearchResultProductSearchResultItemModel } from './AmarantSearchResultProductSearchResultItemModel';
export type AmarantSearchResultModel = Array<{
    type?: string;
    results?: Array<(AmarantSearchResultPostCategorySearchResultItemModel | AmarantSearchResultPostSearchResultItemModel | AmarantSearchResultProductSearchResultItemModel | AmarantSearchResultCategorySearchResultItemModel)>;
}>;
