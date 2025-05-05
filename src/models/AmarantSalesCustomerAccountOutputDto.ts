/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCustomerAccountAddressOutputDto } from './AmarantSalesCustomerAccountAddressOutputDto';
import type { AmarantSalesCustomerAccountStateOutputDto } from './AmarantSalesCustomerAccountStateOutputDto';
export type AmarantSalesCustomerAccountOutputDto = {
    id: number;
    groupId?: number | null;
    groupName?: string | null;
    organizationId?: number | null;
    organizationName?: string | null;
    username: string;
    email: string;
    channelId: number;
    channelCode: string;
    state: AmarantSalesCustomerAccountStateOutputDto;
    attributeSetId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    addresses: Array<AmarantSalesCustomerAccountAddressOutputDto>;
    cartId?: string | null;
    impersonatedBy?: number | null;
};

