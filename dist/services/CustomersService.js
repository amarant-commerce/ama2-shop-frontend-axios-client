import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomersService {
    /**
     * Get authorization token.
     * Get authorization token.
     * @param requestBody
     * @param xAmarant2FaCode Two-factor authentication code.
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static getAuthorizationToken(requestBody, xAmarant2FaCode) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/token',
            headers: {
                'X-Amarant-2FA-Code': xAmarant2FaCode,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials (SA-013).`,
                428: `2FA code required (SA-058).`,
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
            url: '/api/customers/v1/create-account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input / Username already exists`,
            },
        });
    }
    /**
     * Confirm customer account.
     * Confirm customer account.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static confirmCustomerAccount(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/confirm-account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or already consumed confirmation.`,
            },
        });
    }
    /**
     * Initiate password reset.
     * Initiate password reset.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static initiatePasswordReset(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/initiate-password-reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Too many password requests.`,
            },
        });
    }
    /**
     * Reset password.
     * Reset password.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static resetPassword(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/reset-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or already consumed password reset code.`,
            },
        });
    }
    /**
     * Get logged in customer.
     * Get logged in customer.
     *
     * Required identity types:
     * * customer
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
    /**
     * Update logged in customer.
     * Update logged in customer.
     *
     * Required identity types:
     * * customer
     * @param requestBody
     * @returns AmarantSalesCustomerAccountOutputDto Resource updated.
     * @throws ApiError
     */
    static meUpdate(requestBody) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/customers/v1/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update organization of logged in customer.
     * Update organization of logged in customer.
     *
     * Required access scopes:
     * * organization_owner
     *
     * Required identity types:
     * * customer
     * @param requestBody
     * @returns AmarantSalesCustomerAccountOrganizationOutputDto Resource updated.
     * @throws ApiError
     */
    static meUpdateOrganization(requestBody) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/customers/v1/me/organization',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Customer not bound to organization.`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get customer address collection.
     * Get customer address collection.
     *
     * Required identity types:
     * * customer
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerAddressCollection() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/addresses',
        });
    }
    /**
     * Create customer address.
     * Create customer address.
     *
     * Required identity types:
     * * customer
     * @param requestBody
     * @returns AmarantSalesCustomerAccountAddressOutputDto Resource created.
     * @throws ApiError
     */
    static createCustomerAddress(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/addresses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input.`,
            },
        });
    }
    /**
     * Get customer address item.
     * Get customer address item.
     *
     * Required identity types:
     * * customer
     * @param id Customer address ID.
     * @returns AmarantSalesCustomerAccountAddressOutputDto OK
     * @throws ApiError
     */
    static getCustomerAddressItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/addresses/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update customer address item.
     * Update customer address item.
     *
     * Required identity types:
     * * customer
     * @param id Customer address ID.
     * @param requestBody
     * @returns AmarantSalesCustomerAccountAddressOutputDto Resource updated.
     * @throws ApiError
     */
    static updateCustomerAddressItem(id, requestBody) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/customers/v1/addresses/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Start social login authentication.
     * Start social login authentication.
     *
     * Required identity types:
     * * guest
     * @param requestBody
     * @returns AmarantSalesCustomerSocialLoginStartAuthenticationOutputDto OK
     * @throws ApiError
     */
    static socialLoginStartAuthentication(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer-social-login/v1/start-authentication',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Provider not available (SASL-007).`,
                500: `Authentication failure (SASL-008).`,
            },
        });
    }
    /**
     * Login with authorization code.
     * Login with authorization code.
     *
     * Required identity types:
     * * guest
     * @param requestBody
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static socialLoginWithAuthorizationCode(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer-social-login/v1/login-with-authorization-code',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Provider not available (SASL-007).`,
                500: `Authentication failure (SASL-008).`,
            },
        });
    }
    /**
     * Get social login provider collection.
     * Get social login provider collection.
     * @returns any OK
     * @throws ApiError
     */
    static socialLoginGetProviderCollection() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer-social-login/v1/providers',
        });
    }
}
