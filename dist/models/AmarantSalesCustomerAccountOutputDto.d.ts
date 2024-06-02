import type { AmarantSalesCustomerAccountAddressOutputDto } from './AmarantSalesCustomerAccountAddressOutputDto';
import type { AmarantSalesCustomerAccountStateOutputDto } from './AmarantSalesCustomerAccountStateOutputDto';
export type AmarantSalesCustomerAccountOutputDto = {
    id: number;
    username: string;
    email: string;
    channelId: number;
    state: AmarantSalesCustomerAccountStateOutputDto;
    attributeSetId: number;
    addresses: Array<AmarantSalesCustomerAccountAddressOutputDto>;
};
