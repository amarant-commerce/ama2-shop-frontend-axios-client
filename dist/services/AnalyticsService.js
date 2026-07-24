"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
class AnalyticsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCookiePanelCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cookie-panels/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
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
    getCookiePanelItem(id) {
        return this.httpRequest.request({
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
    recordCookiePanelConsentHistory(requestBody) {
        return this.httpRequest.request({
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
exports.AnalyticsService = AnalyticsService;
