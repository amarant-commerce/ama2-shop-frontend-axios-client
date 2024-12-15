import type { AmarantSalesCustomerAccountAddressInputDto } from './AmarantSalesCustomerAccountAddressInputDto';
export type CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto = {
    username: string;
    password: string;
    email: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    addresses: Array<AmarantSalesCustomerAccountAddressInputDto>;
    /**
     * Captcha token.
     */
    token?: string | null;
};
