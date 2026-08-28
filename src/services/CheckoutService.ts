/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { AmarantSalesCheckoutPaymentRedirectCancelOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectCancelOutputModel';
import type { AmarantSalesCheckoutPaymentRedirectSuccessOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectSuccessOutputModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CheckoutService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * Use application state endpoint instead.
     * Use application state endpoint instead.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    public getCheckoutConfiguration(): CancelablePromise<AmarantSalesCheckoutConfigurationModel> {
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
    public checkoutPaymentRedirectSuccess(
        methodCode: string,
    ): CancelablePromise<AmarantSalesCheckoutPaymentRedirectSuccessOutputModel> {
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
    public checkoutPaymentRedirectCancel(
        methodCode: string,
    ): CancelablePromise<AmarantSalesCheckoutPaymentRedirectCancelOutputModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/cancel/{methodCode}',
            path: {
                'methodCode': methodCode,
            },
        });
    }
}
