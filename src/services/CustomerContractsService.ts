/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomerContractsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public terminateCustomerContract(
        requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
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
    public terminateCustomerOrderContract(
        requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/terminate-order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
