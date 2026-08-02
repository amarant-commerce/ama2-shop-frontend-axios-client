import type { AmarantSearchResultCategorySearchResultItemModel } from './AmarantSearchResultCategorySearchResultItemModel';
import type { AmarantSearchResultPostCategorySearchResultItemModel } from './AmarantSearchResultPostCategorySearchResultItemModel';
import type { AmarantSearchResultPostSearchResultItemModel } from './AmarantSearchResultPostSearchResultItemModel';
import type { AmarantSearchResultProductSearchResultItemModel } from './AmarantSearchResultProductSearchResultItemModel';
export type AmarantSearchResultModel = Array<{
    type: string;
    label: string;
    results: Array<(AmarantSearchResultProductSearchResultItemModel | AmarantSearchResultCategorySearchResultItemModel | AmarantSearchResultPostCategorySearchResultItemModel | AmarantSearchResultPostSearchResultItemModel)>;
    viewAllResultsPath?: string | null;
}>;
