/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSearchResultModel } from '../models/AmarantSearchResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get search results.
     * Get search results.
     * @param q Query text.
     * @returns AmarantSearchResultModel
     * @throws ApiError
     */
    public getSearchResults(
        q: string,
    ): CancelablePromise<AmarantSearchResultModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/search/v1',
            query: {
                'q': q,
            },
        });
    }
}
