import type { AmarantSalesCustomerAccountOutputDto } from './AmarantSalesCustomerAccountOutputDto';
export type AmarantSalesCustomerMeOutputDto = {
    loggedIn: boolean;
    customer?: AmarantSalesCustomerAccountOutputDto | null;
};
