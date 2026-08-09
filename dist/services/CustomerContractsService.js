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
    static lookupCustomerOrderContract(requestBody) {
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
    static terminateCustomerContract(requestBody) {
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
    static terminateCustomerOrderContract(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/terminate-order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
