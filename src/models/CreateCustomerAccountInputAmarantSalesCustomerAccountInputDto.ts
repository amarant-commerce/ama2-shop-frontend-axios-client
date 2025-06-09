/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCustomerAccountAddressInputDto } from './AmarantSalesCustomerAccountAddressInputDto';
export type CreateCustomerAccountInputAmarantSalesCustomerAccountInputDto = {
    username: string;
    password: string;
    email: string;
    /**
     * Required transient attributes:
     *
     * **customerAccountType**
     *
     * Type "business" in turn requires attributes:
     * - companyName (string)
     * - vatId (string)
     */
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    addresses: Array<AmarantSalesCustomerAccountAddressInputDto>;
    /**
     * Captcha token.
     */
    token?: string | null;
};

