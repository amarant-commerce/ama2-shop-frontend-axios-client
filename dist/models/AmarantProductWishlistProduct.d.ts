export type AmarantProductWishlistProduct = {
    id: string;
    productId: (number | string);
    channelId: (number | string);
    parentProductId: (number | null | string | null);
    customizationId: (number | null | string | null);
    addedAt: string;
};
