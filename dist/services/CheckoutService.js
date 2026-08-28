import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CheckoutService {
    /**
     * @deprecated
     * Use application state endpoint instead.
     * Use application state endpoint instead.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    static getCheckoutConfiguration() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/checkout/v1/configuration',
        });
    }
    /**
     * Handle payment redirect success.
     * Handle payment redirect success.
     * @param requestBody
     * @returns AmarantSalesCheckoutPaymentRedirectSuccessOutputModel OK
     * @throws ApiError
     */
    static checkoutPaymentRedirectSuccess(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/success',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Handle payment redirect cancel.
     * Handle payment redirect cancel.
     * @param requestBody
     * @returns AmarantSalesCheckoutPaymentRedirectCancelOutputModel OK
     * @throws ApiError
     */
    static checkoutPaymentRedirectCancel(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/cancel',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
