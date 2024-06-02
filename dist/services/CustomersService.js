import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomersService {
    /**
     * Get authorization token.
     * Get authorization token.
     * @param requestBody
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static getAuthorizationToken(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials.`,
            },
        });
    }
    /**
     * Refresh authorization token.
     * Refresh authorization token.
     * @param requestBody
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static refreshAuthorizationToken(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid or expired refresh token.`,
            },
        });
    }
    /**
     * Create customer account.
     * Create customer account.
     * @param requestBody
     * @returns AmarantSalesCustomerAccountOutputDto Resource created.
     * @throws ApiError
     */
    static createCustomerAccount(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input / Username already exists`,
            },
        });
    }
    /**
     * Get logged in customer.
     * Get logged in customer.
     * @returns AmarantSalesCustomerAccountOutputDto OK
     * @throws ApiError
     */
    static me() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
