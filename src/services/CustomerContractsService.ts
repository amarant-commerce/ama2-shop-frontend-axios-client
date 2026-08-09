/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCustomerContractOrderLookupResultOutputDto } from '../models/AmarantSalesCustomerContractOrderLookupResultOutputDto';
import type { AmarantSalesCustomerContractSubmissionResultOutputDto } from '../models/AmarantSalesCustomerContractSubmissionResultOutputDto';
import type { LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto } from '../models/LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto';
import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerContractsService {
    /**
     * Look up an order by email and order number for contract termination.
     * Look up an order by email and order number for contract termination.
     * @param requestBody
     * @returns AmarantSalesCustomerContractOrderLookupResultOutputDto OK
     * @throws ApiError
     */
    public static lookupCustomerOrderContract(
        requestBody: LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto,
    ): CancelablePromise<AmarantSalesCustomerContractOrderLookupResultOutputDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/lookup-order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    public static terminateCustomerContract(
        requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto,
    ): CancelablePromise<AmarantSalesCustomerContractSubmissionResultOutputDto> {
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
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    public static terminateCustomerOrderContract(
        requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto,
    ): CancelablePromise<AmarantSalesCustomerContractSubmissionResultOutputDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/terminate-order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
