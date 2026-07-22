import type { AmarantSearchResultModel } from '../models/AmarantSearchResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SearchService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get search results.
     * Get search results.
     * @param q Query text.
     * @returns AmarantSearchResultModel
     * @throws ApiError
     */
    getSearchResults(q: string): CancelablePromise<AmarantSearchResultModel>;
}
