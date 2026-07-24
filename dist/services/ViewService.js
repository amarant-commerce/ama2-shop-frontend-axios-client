"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewService = void 0;
class ViewService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    getNavigation() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/view/v1/navigation',
        });
    }
}
exports.ViewService = ViewService;
