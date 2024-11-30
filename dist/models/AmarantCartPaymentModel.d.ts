import type { AmarantCartAddressModel } from './AmarantCartAddressModel';
export type AmarantCartPaymentModel = {
    id: string;
    address: AmarantCartAddressModel;
    method: string;
    methodTitle: string;
};
