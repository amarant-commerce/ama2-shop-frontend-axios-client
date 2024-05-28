import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CheckoutService {
    /**
     * Get checkout configuration.
     * Get checkout configuration.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    static getCheckoutConfiguration() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/checkout/v1/configuration',
        });
    }
}
