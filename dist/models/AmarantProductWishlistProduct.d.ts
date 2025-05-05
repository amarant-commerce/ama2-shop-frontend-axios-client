export type AmarantProductWishlistProduct = {
    id: string;
    productId: number;
    channelId: number;
    parentProductId?: number | null;
    configurationId?: string | null;
    addedAt: string;
};
