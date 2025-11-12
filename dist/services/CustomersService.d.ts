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
export declare class CustomersService {
    /**
     * Get authorization token.
     * Get authorization token.
     * @param requestBody
     * @param xAmarant2FaCode Two-factor authentication code.
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static getAuthorizationToken(requestBody: GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto, xAmarant2FaCode?: string | number): CancelablePromise<AmarantSecurityJwtTokenModel>;
    /**
     * Refresh authorization token.
     * Refresh authorization token.
     * @param requestBody
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static refreshAuthorizationToken(requestBody: RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto): CancelablePromise<AmarantSecurityJwtTokenModel>;
    /**
     * Create customer account.
     * Create customer account.
     * @param requestBody
     * @returns AmarantSalesCustomerAccountOutputDto Resource created.
     * @throws ApiError
     */
    static createCustomerAccount(requestBody: CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto): CancelablePromise<AmarantSalesCustomerAccountOutputDto>;
    /**
     * Confirm customer account.
     * Confirm customer account.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static confirmCustomerAccount(requestBody: ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto): CancelablePromise<void>;
    /**
     * Initiate password reset.
     * Initiate password reset.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static initiatePasswordReset(requestBody: InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto): CancelablePromise<void>;
    /**
     * Reset password.
     * Reset password.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static resetPassword(requestBody: ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto): CancelablePromise<void>;
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
    static me(): CancelablePromise<AmarantSalesCustomerAccountOutputDto>;
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
    static meUpdate(requestBody: MeUpdateInputAmarantSalesCustomerAccountUpdateInputDto): CancelablePromise<AmarantSalesCustomerAccountOutputDto>;
    /**
     * Get logged in customer.
     * Get logged in customer.
     * @returns AmarantSalesCustomerMeOutputDto OK
     * @throws ApiError
     */
    static getLoggedInCustomer(): CancelablePromise<AmarantSalesCustomerMeOutputDto>;
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
    static meUpdateOrganization(requestBody: MeUpdateOrganizationInputAmarantSalesCustomerAccountOrganizationInputDto): CancelablePromise<AmarantSalesCustomerAccountOrganizationOutputDto>;
    /**
     * Get customer address collection.
     * Get customer address collection.
     *
     * Required identity types:
     * * customer
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerAddressCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantSalesCustomerAccountAddressOutputDto>;
    })>;
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
    static createCustomerAddress(requestBody: CreateCustomerAddressInputAmarantSalesCustomerAccountAddressInputDto): CancelablePromise<AmarantSalesCustomerAccountAddressOutputDto>;
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
    static getCustomerAddressItem(id: number): CancelablePromise<AmarantSalesCustomerAccountAddressOutputDto>;
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
    static updateCustomerAddressItem(id: number, requestBody: UpdateCustomerAddressItemInputAmarantSalesCustomerAccountAddressInputDto): CancelablePromise<AmarantSalesCustomerAccountAddressOutputDto>;
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
    static socialLoginStartAuthentication(requestBody: SocialLoginStartAuthenticationInputAmarantSalesCustomerSocialLoginStartAuthenticationInputDto): CancelablePromise<AmarantSalesCustomerSocialLoginStartAuthenticationOutputDto>;
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
    static socialLoginWithAuthorizationCode(requestBody: SocialLoginWithAuthorizationCodeInputAmarantSalesCustomerSocialLoginAuthorizationCodeInputDto): CancelablePromise<AmarantSecurityJwtTokenModel>;
    /**
     * Get social login provider collection.
     * Get social login provider collection.
     * @returns any OK
     * @throws ApiError
     */
    static socialLoginGetProviderCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantSalesCustomerSocialLoginProviderOutputDto>;
    })>;
}
