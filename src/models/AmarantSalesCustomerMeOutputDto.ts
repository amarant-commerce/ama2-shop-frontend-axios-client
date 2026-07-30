/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCustomerAccountOutputDto } from './AmarantSalesCustomerAccountOutputDto';
export type AmarantSalesCustomerMeOutputDto = {
    loggedIn: boolean;
    customer?: AmarantSalesCustomerAccountOutputDto | null;
    meta: Record<string, (string | number | boolean | Record<string, any> | null)>;
};

