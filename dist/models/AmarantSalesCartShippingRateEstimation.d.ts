export type AmarantSalesCartShippingRateEstimation = {
    identifier: string;
    orderItems?: Array<string> | null;
    street: Array<string>;
    postcode?: string | null;
    city?: string | null;
    countryId?: string | null;
    regionId?: string | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};
