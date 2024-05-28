/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCheckoutConfigurationModel } from '../models/AmarantSalesCheckoutConfigurationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CheckoutService {
    /**
     * Get checkout configuration.
     * Get checkout configuration.
     * @returns AmarantSalesCheckoutConfigurationModel OK
     * @throws ApiError
     */
    public static getCheckoutConfiguration(): CancelablePromise<AmarantSalesCheckoutConfigurationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/checkout/v1/configuration',
        });
    }
}
