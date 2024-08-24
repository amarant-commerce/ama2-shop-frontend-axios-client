export type AmarantProductPriceItem = {
    type: AmarantProductPriceItem.type;
    code: string;
    scope?: string | null;
    price: number;
    priceExTax: number;
    priceInclTax: number;
    salePrice: number;
    salePriceExTax: number;
    salePriceInclTax: number;
    qty?: string | null;
    availableFrom?: string | null;
    availableTo?: string | null;
    meta?: Record<string, (string | number | boolean | null)> | null;
};
export declare namespace AmarantProductPriceItem {
    enum type {
        GLOBAL = "global",
        TARGETED = "targeted"
    }
}
