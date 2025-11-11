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
            url: '/api/cookie-panels/v1',
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
     * @returns AmarantCookiePanelModel OK
     * @throws ApiError
     */
    static getCookiePanelItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cookie-panels/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Record cookie panel consent history.
     * Record cookie panel consent history.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static recordCookiePanelConsentHistory(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/cookie-panels/v1/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid identity.`,
                404: `Cookie panel / Cookie panel item not found.`,
            },
        });
    }
}
