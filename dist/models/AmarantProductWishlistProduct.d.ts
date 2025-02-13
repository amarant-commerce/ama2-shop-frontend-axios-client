export type AmarantProductWishlistProduct = {
    id: string;
    productId: number;
    channelId: number;
    parentProductId?: number | null;
    customizationId?: string | null;
    addedAt: string;
};
