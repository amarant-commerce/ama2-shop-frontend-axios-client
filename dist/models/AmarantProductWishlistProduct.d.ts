export type AmarantProductWishlistProduct = {
    id: string;
    productId: number;
    channelId: number;
    parentProductId?: number | null;
    configurationId?: string | null;
    note?: string | null;
    addedAt: string;
};
