import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CheckoutService {
    /**
     * @deprecated
     * Use application state endpoint instead.
     * Use application state endpoint instead.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    static getCheckoutConfiguration(): CancelablePromise<AmarantSalesCheckoutConfigurationModel>;
}
