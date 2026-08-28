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
     * @param methodCode Payment method code.
     * @returns AmarantSalesCheckoutPaymentRedirectSuccessOutputModel OK
     * @throws ApiError
     */
    static checkoutPaymentRedirectSuccess(methodCode) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/success/{methodCode}',
            path: {
                'methodCode': methodCode,
            },
        });
    }
    /**
     * Handle payment redirect cancel.
     * Handle payment redirect cancel.
     * @param methodCode Payment method code.
     * @returns AmarantSalesCheckoutPaymentRedirectCancelOutputModel OK
     * @throws ApiError
     */
    static checkoutPaymentRedirectCancel(methodCode) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/cancel/{methodCode}',
            path: {
                'methodCode': methodCode,
            },
        });
    }
}
