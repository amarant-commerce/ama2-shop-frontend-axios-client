export type ResetPasswordInputAmarantSalesCustomerResetAccountPasswordInputDto = {
    resetCode: string;
    password: string;
    /**
     * Captcha token.
     */
    token?: string | null;
};
