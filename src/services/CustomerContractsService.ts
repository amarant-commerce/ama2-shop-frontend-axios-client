/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerContractsService {
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static terminateCustomerContract(
        requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/terminate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Terminate customer order contract.
     * Terminate customer order contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static terminateCustomerOrderContract(
        requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/terminate-order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
