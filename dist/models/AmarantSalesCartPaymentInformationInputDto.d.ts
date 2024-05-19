import type { AmarantSalesCartPaymentInformationAddressInputDto } from './AmarantSalesCartPaymentInformationAddressInputDto';
export type AmarantSalesCartPaymentInformationInputDto = {
    method: string;
    orderItemIds: Array<string>;
    address: AmarantSalesCartPaymentInformationAddressInputDto;
    additionalData: Record<string, string | number | number | boolean | any[] | null>;
};
