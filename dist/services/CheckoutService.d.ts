import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { AmarantSalesCheckoutPaymentRedirectCancelOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectCancelOutputModel';
import type { AmarantSalesCheckoutPaymentRedirectSuccessOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectSuccessOutputModel';
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
    /**
     * Handle payment redirect success.
     * Handle payment redirect success.
     * @param methodCode Payment method code.
     * @returns AmarantSalesCheckoutPaymentRedirectSuccessOutputModel OK
     * @throws ApiError
     */
    static checkoutPaymentRedirectSuccess(methodCode: string): CancelablePromise<AmarantSalesCheckoutPaymentRedirectSuccessOutputModel>;
    /**
     * Handle payment redirect cancel.
     * Handle payment redirect cancel.
     * @param methodCode Payment method code.
     * @returns AmarantSalesCheckoutPaymentRedirectCancelOutputModel OK
     * @throws ApiError
     */
    static checkoutPaymentRedirectCancel(methodCode: string): CancelablePromise<AmarantSalesCheckoutPaymentRedirectCancelOutputModel>;
}
