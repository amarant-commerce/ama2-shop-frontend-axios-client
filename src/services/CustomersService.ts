/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCustomerAccountOutputDto } from '../models/AmarantSalesCustomerAccountOutputDto';
import type { AmarantSecurityJwtTokenModel } from '../models/AmarantSecurityJwtTokenModel';
import type { ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto } from '../models/ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto';
import type { CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto } from '../models/CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto';
import type { GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto } from '../models/GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto';
import type { InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto } from '../models/InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto';
import type { RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto } from '../models/RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto';
import type { ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto } from '../models/ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static getAuthorizationToken(
        requestBody?: GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto,
    ): CancelablePromise<AmarantSecurityJwtTokenModel> {
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
    public static refreshAuthorizationToken(
        requestBody?: RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto,
    ): CancelablePromise<AmarantSecurityJwtTokenModel> {
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
    public static createCustomerAccount(
        requestBody?: CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto,
    ): CancelablePromise<AmarantSalesCustomerAccountOutputDto> {
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
    public static confirmCustomerAccount(
        requestBody?: ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto,
    ): CancelablePromise<void> {
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
    public static initiatePasswordReset(
        requestBody?: InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto,
    ): CancelablePromise<void> {
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
    public static resetPassword(
        requestBody?: ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto,
    ): CancelablePromise<void> {
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
     * @returns AmarantSalesCustomerAccountOutputDto OK
     * @throws ApiError
     */
    public static me(): CancelablePromise<AmarantSalesCustomerAccountOutputDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
