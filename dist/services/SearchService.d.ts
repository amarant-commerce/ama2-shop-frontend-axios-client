import type { AmarantSearchResultModel } from '../models/AmarantSearchResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SearchService {
    /**
     * Get search results.
     * Get search results.
     * @param q Query text.
     * @returns AmarantSearchResultModel
     * @throws ApiError
     */
    static getSearchResults(q: string): CancelablePromise<AmarantSearchResultModel>;
}
