export type AmarantOrderPaymentModel = {
    id: string;
    addressId?: string | null;
    method: string;
    title: string;
    state: string;
    updatedAt: string;
    addressFormatted: string;
};
