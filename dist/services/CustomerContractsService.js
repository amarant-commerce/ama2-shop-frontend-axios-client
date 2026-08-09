export class CustomerContractsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Look up an order by email and order number for contract termination.
     * Look up an order by email and order number for contract termination.
     * @param requestBody
     * @returns AmarantSalesCustomerContractOrderLookupResultOutputDto OK
     * @throws ApiError
     */
    lookupCustomerOrderContract(requestBody) {
        return this.httpRequest.request({
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
    terminateCustomerContract(requestBody) {
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
     * @returns AmarantSalesCustomerContractSubmissionResultOutputDto Resource created.
     * @throws ApiError
     */
    terminateCustomerOrderContract(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-customer-contracts/v1/terminate-order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
