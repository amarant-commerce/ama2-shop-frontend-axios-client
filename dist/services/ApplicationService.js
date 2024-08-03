import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationService {
    /**
     * Get application state.
     * Get application state.
     * @returns AmarantApplicationStateModel OK
     * @throws ApiError
     */
    static getApplicationState() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/application/v1/state',
        });
    }
}
