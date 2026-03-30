import type { AmarantSalesCheckoutAddressConfigurationModel } from './AmarantSalesCheckoutAddressConfigurationModel';
import type { AmarantSalesCheckoutCustomerAccountConfigurationModel } from './AmarantSalesCheckoutCustomerAccountConfigurationModel';
import type { AmarantSalesTermsConditionsOutputDto } from './AmarantSalesTermsConditionsOutputDto';
export type AmarantSalesCheckoutConfigurationModel = {
    allowCarts: boolean;
    allowNewCarts: boolean;
    allowGuestOrders: boolean;
    allowedAccountTypes: Array<string>;
    addressConfiguration: AmarantSalesCheckoutAddressConfigurationModel;
    customerAccountConfiguration: AmarantSalesCheckoutCustomerAccountConfigurationModel;
    termsConditions: Array<AmarantSalesTermsConditionsOutputDto>;
};
