import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CustomerContractsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    terminateCustomerContract(requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<void>;
    /**
     * Terminate customer order contract.
     * Terminate customer order contract.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    terminateCustomerOrderContract(requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<void>;
}
