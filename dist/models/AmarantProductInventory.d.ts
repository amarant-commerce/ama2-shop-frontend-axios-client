export type AmarantProductInventory = {
    inStock: boolean;
    managed: boolean;
    backorders: boolean;
    minQtyPurchase?: string | null;
    maxQtyPurchase?: string | null;
    qty?: string | null;
    qtyComparison: string;
};
