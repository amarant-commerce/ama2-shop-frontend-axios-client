/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantSalesCustomerAccountAddressOutputDto } from '../models/AmarantSalesCustomerAccountAddressOutputDto';
import type { AmarantSalesCustomerAccountOrganizationOutputDto } from '../models/AmarantSalesCustomerAccountOrganizationOutputDto';
import type { AmarantSalesCustomerAccountOutputDto } from '../models/AmarantSalesCustomerAccountOutputDto';
import type { AmarantSalesCustomerMeOutputDto } from '../models/AmarantSalesCustomerMeOutputDto';
import type { AmarantSalesCustomerSocialLoginProviderOutputDto } from '../models/AmarantSalesCustomerSocialLoginProviderOutputDto';
import type { AmarantSalesCustomerSocialLoginStartAuthenticationOutputDto } from '../models/AmarantSalesCustomerSocialLoginStartAuthenticationOutputDto';
import type { AmarantSecurityJwtTokenModel } from '../models/AmarantSecurityJwtTokenModel';
import type { ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto } from '../models/ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto';
import type { CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto } from '../models/CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto';
import type { CreateCustomerAddressInputAmarantSalesCustomerAccountAddressInputDto } from '../models/CreateCustomerAddressInputAmarantSalesCustomerAccountAddressInputDto';
import type { GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto } from '../models/GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto';
import type { InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto } from '../models/InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto';
import type { MeUpdateInputAmarantSalesCustomerAccountUpdateInputDto } from '../models/MeUpdateInputAmarantSalesCustomerAccountUpdateInputDto';
import type { MeUpdateOrganizationInputAmarantSalesCustomerAccountOrganizationInputDto } from '../models/MeUpdateOrganizationInputAmarantSalesCustomerAccountOrganizationInputDto';
import type { RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto } from '../models/RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto';
import type { ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto } from '../models/ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto';
import type { SocialLoginStartAuthenticationInputAmarantSalesCustomerSocialLoginStartAuthenticationInputDto } from '../models/SocialLoginStartAuthenticationInputAmarantSalesCustomerSocialLoginStartAuthenticationInputDto';
import type { SocialLoginWithAuthorizationCodeInputAmarantSalesCustomerSocialLoginAuthorizationCodeInputDto } from '../models/SocialLoginWithAuthorizationCodeInputAmarantSalesCustomerSocialLoginAuthorizationCodeInputDto';
import type { UpdateCustomerAddressItemInputAmarantSalesCustomerAccountAddressInputDto } from '../models/UpdateCustomerAddressItemInputAmarantSalesCustomerAccountAddressInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static getAuthorizationToken(
        requestBody: GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto,
        xAmarant2FaCode?: string | number,
    ): CancelablePromise<AmarantSecurityJwtTokenModel> {
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
    public static refreshAuthorizationToken(
        requestBody: RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto,
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
        requestBody: CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto,
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
        requestBody: ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto,
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
        requestBody: InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto,
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
        requestBody: ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto,
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
     * @deprecated
     * Get logged in customer. Deprecated, use v2 instead.
     * Get logged in customer. Deprecated, use v2 instead.
     *
     * Required identity types:
     * * customer
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
    public static meUpdate(
        requestBody: MeUpdateInputAmarantSalesCustomerAccountUpdateInputDto,
    ): CancelablePromise<AmarantSalesCustomerAccountOutputDto> {
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
     * Get logged in customer.
     * Get logged in customer.
     * @returns AmarantSalesCustomerMeOutputDto OK
     * @throws ApiError
     */
    public static getLoggedInCustomer(): CancelablePromise<AmarantSalesCustomerMeOutputDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v2/me',
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
    public static meUpdateOrganization(
        requestBody: MeUpdateOrganizationInputAmarantSalesCustomerAccountOrganizationInputDto,
    ): CancelablePromise<AmarantSalesCustomerAccountOrganizationOutputDto> {
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
    public static getCustomerAddressCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantSalesCustomerAccountAddressOutputDto>;
    })> {
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
    public static createCustomerAddress(
        requestBody: CreateCustomerAddressInputAmarantSalesCustomerAccountAddressInputDto,
    ): CancelablePromise<AmarantSalesCustomerAccountAddressOutputDto> {
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
    public static getCustomerAddressItem(
        id: number,
    ): CancelablePromise<AmarantSalesCustomerAccountAddressOutputDto> {
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
    public static updateCustomerAddressItem(
        id: number,
        requestBody: UpdateCustomerAddressItemInputAmarantSalesCustomerAccountAddressInputDto,
    ): CancelablePromise<AmarantSalesCustomerAccountAddressOutputDto> {
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
    public static socialLoginStartAuthentication(
        requestBody: SocialLoginStartAuthenticationInputAmarantSalesCustomerSocialLoginStartAuthenticationInputDto,
    ): CancelablePromise<AmarantSalesCustomerSocialLoginStartAuthenticationOutputDto> {
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
    public static socialLoginWithAuthorizationCode(
        requestBody: SocialLoginWithAuthorizationCodeInputAmarantSalesCustomerSocialLoginAuthorizationCodeInputDto,
    ): CancelablePromise<AmarantSecurityJwtTokenModel> {
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
    public static socialLoginGetProviderCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantSalesCustomerSocialLoginProviderOutputDto>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer-social-login/v1/providers',
        });
    }
}
