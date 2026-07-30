export class CustomerContractsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Terminate customer contract.
     * Terminate customer contract.
     * @param requestBody
     * @returns void
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
     * @returns void
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
