export class SearchService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get search results.
     * Get search results.
     * @param q Query text.
     * @returns AmarantSearchResultModel
     * @throws ApiError
     */
    getSearchResults(q) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/search/v1',
            query: {
                'q': q,
            },
        });
    }
}
