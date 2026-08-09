import type { AmarantSalesCustomerContractOrderLookupResultOutputDto } from '../models/AmarantSalesCustomerContractOrderLookupResultOutputDto';
import type { AmarantSalesCustomerContractSubmissionResultOutputDto } from '../models/AmarantSalesCustomerContractSubmissionResultOutputDto';
import type { LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto } from '../models/LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto';
import type { TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto } from '../models/TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CustomerContractsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Look up an order by email and order number for contract termination.
     * Look up an order by email and order number for contract termination.
     * @param requestBody
     * @returns AmarantSalesCustomerContractOrderLookupResultOutputDto OK
     * @throws ApiError
     */
    lookupCustomerOrderContract(requestBody: LookupCustomerOrderContractInputAmarantSalesCustomerContractLookupOrderInputDto): CancelablePromise<AmarantSalesCustomerContractOrderLookupResultOutputDto>;
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    terminateCustomerContract(requestBody: TerminateCustomerContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<AmarantSalesCustomerContractSubmissionResultOutputDto>;
    /**
     * Terminate customer order contract.
     * Terminate customer order contract.
     * @param requestBody
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    terminateCustomerOrderContract(requestBody: TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto): CancelablePromise<AmarantSalesCustomerContractSubmissionResultOutputDto>;
}
