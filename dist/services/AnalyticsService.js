import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalyticsService {
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCookiePanelCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analytics/v1/cookie-panels',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get cookie panel item.
     * Get cookie panel item.
     * @param id Cookie panel ID
     * @returns AmarantAnalyticsCookiePanelModel OK
     * @throws ApiError
     */
    static getCookiePanelItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analytics/v1/cookie-panels/{id}',
            path: {
                'id': id,
            },
        });
    }
}
