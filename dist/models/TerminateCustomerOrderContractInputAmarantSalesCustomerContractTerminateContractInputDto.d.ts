import type { AmarantSalesCustomerContractTerminateContractOrderItemInputDto } from './AmarantSalesCustomerContractTerminateContractOrderItemInputDto';
export type TerminateCustomerOrderContractInputAmarantSalesCustomerContractTerminateContractInputDto = {
    email: string;
    orderNumber: string;
    name: string;
    message?: string | null;
    orderItems: Array<AmarantSalesCustomerContractTerminateContractOrderItemInputDto>;
};
