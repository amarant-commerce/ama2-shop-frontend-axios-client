"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationService = void 0;
class ApplicationService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get application state.
     * Get application state.
     * @returns AmarantApplicationStateModel OK
     * @throws ApiError
     */
    getApplicationState() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/application/v1/state',
        });
    }
}
exports.ApplicationService = ApplicationService;
