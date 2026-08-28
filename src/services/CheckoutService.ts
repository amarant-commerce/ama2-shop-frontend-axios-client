/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { AmarantSalesCheckoutPaymentRedirectCancelOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectCancelOutputModel';
import type { AmarantSalesCheckoutPaymentRedirectSuccessOutputModel } from '../models/AmarantSalesCheckoutPaymentRedirectSuccessOutputModel';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static getCheckoutConfiguration(): CancelablePromise<AmarantSalesCheckoutConfigurationModel> {
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
    public static checkoutPaymentRedirectSuccess(
        methodCode: string,
    ): CancelablePromise<AmarantSalesCheckoutPaymentRedirectSuccessOutputModel> {
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
    public static checkoutPaymentRedirectCancel(
        methodCode: string,
    ): CancelablePromise<AmarantSalesCheckoutPaymentRedirectCancelOutputModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/checkout/v1/payment/redirect/cancel/{methodCode}',
            path: {
                'methodCode': methodCode,
            },
        });
    }
}
