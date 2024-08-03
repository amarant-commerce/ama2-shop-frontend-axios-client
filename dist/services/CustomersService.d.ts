import type { AmarantSalesCustomerAccountOutputDto } from '../models/AmarantSalesCustomerAccountOutputDto';
import type { AmarantSecurityJwtTokenModel } from '../models/AmarantSecurityJwtTokenModel';
import type { ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto } from '../models/ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto';
import type { CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto } from '../models/CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto';
import type { GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto } from '../models/GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto';
import type { InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto } from '../models/InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto';
import type { RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto } from '../models/RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto';
import type { ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto } from '../models/ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CustomersService {
    /**
     * Get authorization token.
     * Get authorization token.
     * @param requestBody
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static getAuthorizationToken(requestBody?: GetAuthorizationTokenInputAmarantSalesCustomerLoginInputDto): CancelablePromise<AmarantSecurityJwtTokenModel>;
    /**
     * Refresh authorization token.
     * Refresh authorization token.
     * @param requestBody
     * @returns AmarantSecurityJwtTokenModel OK
     * @throws ApiError
     */
    static refreshAuthorizationToken(requestBody?: RefreshAuthorizationTokenInputAmarantSalesCustomerRefreshTokenInputDto): CancelablePromise<AmarantSecurityJwtTokenModel>;
    /**
     * Create customer account.
     * Create customer account.
     * @param requestBody
     * @returns AmarantSalesCustomerAccountOutputDto Resource created.
     * @throws ApiError
     */
    static createCustomerAccount(requestBody?: CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto): CancelablePromise<AmarantSalesCustomerAccountOutputDto>;
    /**
     * Confirm customer account.
     * Confirm customer account.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static confirmCustomerAccount(requestBody?: ConfirmCustomerAccountInputAmarantSalesCustomerAccountConfirmationInputDto): CancelablePromise<void>;
    /**
     * Initiate password reset.
     * Initiate password reset.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static initiatePasswordReset(requestBody?: InitiatePasswordResetInputAmarantSalesCustomerPasswordResetRequestInputDto): CancelablePromise<void>;
    /**
     * Reset password.
     * Reset password.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static resetPassword(requestBody?: ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto): CancelablePromise<void>;
    /**
     * Get logged in customer.
     * Get logged in customer.
     * @returns AmarantSalesCustomerAccountOutputDto OK
     * @throws ApiError
     */
    static me(): CancelablePromise<AmarantSalesCustomerAccountOutputDto>;
}
