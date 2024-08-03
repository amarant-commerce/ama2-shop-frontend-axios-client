export type AmarantPlacedOrderResultPaymentFormRequestModel = {
    url: string;
    method: string;
    data: Record<string, string | null>;
    type: 'form';
};
