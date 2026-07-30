import type { AmarantSalesCustomerAccountOutputDto } from './AmarantSalesCustomerAccountOutputDto';
export type AmarantSalesCustomerMeOutputDto = {
    loggedIn: boolean;
    customer?: AmarantSalesCustomerAccountOutputDto | null;
    meta: Record<string, (string | number | boolean | Record<string, any> | null)>;
};
