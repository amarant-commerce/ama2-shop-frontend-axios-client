import type { AmarantFrameworkEntityPersonAddress } from './AmarantFrameworkEntityPersonAddress';
export type AmarantEstimatedShippingRateModel = {
    identifier: string;
    /**
     * Deprecated. Use deliveryMethodCode instead.
     * @deprecated
     */
    carrierCode: string;
    /**
     * Deprecated. Use title instead.
     * @deprecated
     */
    carrierTitle: string;
    /**
     * Deprecated. Use deliveryMethodRateCode instead.
     * @deprecated
     */
    method: string;
    deliveryMethodCode: string;
    deliveryMethodRateCode: string;
    title: string;
    imageUrl?: string | null;
    shippable: boolean;
    price: number;
    shortDescription?: string | null;
    description?: string | null;
    informativeDeliveryAddress?: AmarantFrameworkEntityPersonAddress | null;
};
