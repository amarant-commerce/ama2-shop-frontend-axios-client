import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ViewService {
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    static getNavigation() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/view/v1/navigation',
        });
    }
}
