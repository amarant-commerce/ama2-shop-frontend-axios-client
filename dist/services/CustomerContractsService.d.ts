import type { AmarantSalesCustomerContractSubmissionResultOutputDto } from '../models/AmarantSalesCustomerContractSubmissionResultOutputDto';
import type { LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto } from '../models/LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto';
import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CustomerContractsService {
    /**
     * Look up an order by email and order number for contract termination.
     * Look up an order by email and order number for contract termination.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static lookupCustomerOrderContract(requestBody: LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto): CancelablePromise<LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto>;
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    static terminateCustomerContract(requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<AmarantSalesCustomerContractSubmissionResultOutputDto>;
    /**
     * Terminate customer order contract.
     * Terminate customer order contract.
     * @param requestBody
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    static terminateCustomerOrderContract(requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<AmarantSalesCustomerContractSubmissionResultOutputDto>;
}
