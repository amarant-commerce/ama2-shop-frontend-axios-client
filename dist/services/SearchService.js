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
    static getSearchResults(q) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/search/v1',
            query: {
                'q': q,
            },
        });
    }
}
