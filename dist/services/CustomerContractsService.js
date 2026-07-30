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
     * @returns void
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
