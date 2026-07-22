import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CheckoutService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @deprecated
     * Use application state endpoint instead.
     * Use application state endpoint instead.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    getCheckoutConfiguration(): CancelablePromise<AmarantSalesCheckoutConfigurationModel>;
}
