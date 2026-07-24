"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutService = void 0;
class CheckoutService {
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
}
exports.CheckoutService = CheckoutService;
