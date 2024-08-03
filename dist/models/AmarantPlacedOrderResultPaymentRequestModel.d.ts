import type { AmarantPlacedOrderResultPaymentFormRequestModel } from './AmarantPlacedOrderResultPaymentFormRequestModel';
import type { AmarantPlacedOrderResultPaymentRedirectRequestModel } from './AmarantPlacedOrderResultPaymentRedirectRequestModel';
export type AmarantPlacedOrderResultPaymentRequestModel = (AmarantPlacedOrderResultPaymentFormRequestModel | AmarantPlacedOrderResultPaymentRedirectRequestModel | {
    type: string;
});
