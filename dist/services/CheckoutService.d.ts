import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CheckoutService {
    /**
     * Get checkout configuration.
     * Get checkout configuration.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    static getCheckoutConfiguration(): CancelablePromise<AmarantSalesCheckoutConfigurationModel>;
}
