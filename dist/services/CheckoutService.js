export class CheckoutService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @deprecated
     * Use application state endpoint instead.
     * Use application state endpoint instead.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    getCheckoutConfiguration() {
        return this.httpRequest.request({
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
    checkoutPaymentRedirectSuccess(methodCode) {
        return this.httpRequest.request({
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
    checkoutPaymentRedirectCancel(methodCode) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/cancel/{methodCode}',
            path: {
                'methodCode': methodCode,
            },
        });
    }
}
