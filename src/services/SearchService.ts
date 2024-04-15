/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSearchResultModel } from '../models/AmarantSearchResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * Get search results.
     * Get search results.
     * @param q Query text.
     * @returns AmarantSearchResultModel
     * @throws ApiError
     */
    public static getSearchResults(
        q: string,
    ): CancelablePromise<AmarantSearchResultModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/search/v1',
            query: {
                'q': q,
            },
        });
    }
}
