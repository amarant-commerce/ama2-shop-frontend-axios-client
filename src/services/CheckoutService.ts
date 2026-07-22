/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
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
}
