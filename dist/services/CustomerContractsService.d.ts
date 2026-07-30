import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CustomerContractsService {
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static terminateCustomerContract(requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<void>;
    /**
     * Terminate customer order contract.
     * Terminate customer order contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static terminateCustomerOrderContract(requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<void>;
}
