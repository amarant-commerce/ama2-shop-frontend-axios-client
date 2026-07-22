export class ProductsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get product collection.
     * Get product collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @param visibility Comma separated product visibility filter (default collection visibility filter applies if value is not sent or invalid).
     * @returns any OK
     * @throws ApiError
     */
    getProductCollection(q, page, itemsPerPage, include, exclude, visibility) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/products/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
                'visibility': visibility,
            },
        });
    }
    /**
     * Get search product collection.
     * Get search product collection.
     * @param query Query text
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getSearchProductCollection(query, q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/products/v1/search',
            query: {
                'query': query,
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get product item.
     * Get product item.
     * @param id Product ID
     * @returns AmarantProductModel OK
     * @throws ApiError
     */
    getProductItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/products/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    getCategoryItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/categories/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get product category relations collection.
     * Get product category relations collection.
     * @param id Root category ID
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getProductCategoryRelationsCollection(id, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/product-category-relations/v1',
            query: {
                'id': id,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get product wishlist collection.
     * Get product wishlist collection.
     *
     * Required identity types:
     * * customer
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getProductWishlistCollection(include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/product-wishlists/v1',
            query: {
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Create product wishlist.
     * Create product wishlist.
     *
     * Required identity types:
     * * customer
     * @param requestBody
     * @returns AmarantProductWishlist Resource created.
     * @throws ApiError
     */
    createProductWishlist(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/product-wishlists/v1',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get product wishlist collection item.
     * Get product wishlist collection item.
     * @param id Product wishlist ID
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    getProductWishlistCollectionItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/product-wishlists/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Remove product wishlist.
     * Remove product wishlist.
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @returns AmarantProductWishlist Resource deleted.
     * @throws ApiError
     */
    removeProductWishlist(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/product-wishlists/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update product wishlist.
     * Update product wishlist.
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @param requestBody
     * @returns AmarantProductWishlist Resource updated.
     * @throws ApiError
     */
    updateProductWishlist(id, requestBody) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/product-wishlists/v1/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add items to wishlist.
     * Add items to wishlist.
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @param requestBody
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    addItemsToWishlist(id, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/product-wishlists/v1/{id}/items',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove wishlist item.
     * Remove wishlist item.
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @param itemId Product wishlist item ID
     * @returns AmarantProductWishlist Resource deleted.
     * @throws ApiError
     */
    removeWishlistItem(id, itemId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/product-wishlists/v1/{id}/items/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
        });
    }
}
