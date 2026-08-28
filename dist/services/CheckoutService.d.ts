import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { AmarantSalesCheckoutPaymentRedirectCancelOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectCancelOutputModel';
import type { AmarantSalesCheckoutPaymentRedirectSuccessOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectSuccessOutputModel';
import type { CheckoutPaymentRedirectCancelInputAmarantSalesCheckoutPaymentRedirectCancelInputDto } from '../models/CheckoutPaymentRedirectCancelInputAmarantSalesCheckoutPaymentRedirectCancelInputDto';
import type { CheckoutPaymentRedirectSuccessInputAmarantSalesCheckoutPaymentRedirectSuccessInputDto } from '../models/CheckoutPaymentRedirectSuccessInputAmarantSalesCheckoutPaymentRedirectSuccessInputDto';
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
    /**
     * Handle payment redirect success.
     * Handle payment redirect success.
     * @param requestBody
     * @returns AmarantSalesCheckoutPaymentRedirectSuccessOutputModel OK
     * @throws ApiError
     */
    checkoutPaymentRedirectSuccess(requestBody: CheckoutPaymentRedirectSuccessInputAmarantSalesCheckoutPaymentRedirectSuccessInputDto): CancelablePromise<AmarantSalesCheckoutPaymentRedirectSuccessOutputModel>;
    /**
     * Handle payment redirect cancel.
     * Handle payment redirect cancel.
     * @param requestBody
     * @returns AmarantSalesCheckoutPaymentRedirectCancelOutputModel OK
     * @throws ApiError
     */
    checkoutPaymentRedirectCancel(requestBody: CheckoutPaymentRedirectCancelInputAmarantSalesCheckoutPaymentRedirectCancelInputDto): CancelablePromise<AmarantSalesCheckoutPaymentRedirectCancelOutputModel>;
}
