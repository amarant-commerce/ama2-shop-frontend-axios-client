import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
     * @returns any OK
     * @throws ApiError
     */
    static getSearchProductCollection(query, q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/v1/search',
            query: {
                'query': query,
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    static getProductItem(id) {
        return __request(OpenAPI, {
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
    static getCategoryItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/categories/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get product wishlist collection.
     * Get product wishlist collection.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductWishlistCollection(page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product-wishlists/v1',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Create product wishlist.
     * Create product wishlist.
     * @param requestBody
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    static createProductWishlist(requestBody) {
        return __request(OpenAPI, {
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
    static getProductWishlistCollectionItem(id) {
        return __request(OpenAPI, {
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
     * @param id Product wishlist ID
     * @returns AmarantProductWishlist Resource deleted.
     * @throws ApiError
     */
    static removeProductWishlist(id) {
        return __request(OpenAPI, {
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
     * @param id Product wishlist ID
     * @param requestBody
     * @returns AmarantProductWishlist Resource updated.
     * @throws ApiError
     */
    static updateProductWishlist(id, requestBody) {
        return __request(OpenAPI, {
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
     * @param id Product wishlist ID
     * @param requestBody
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    static addItemsToWishlist(id, requestBody) {
        return __request(OpenAPI, {
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
     * @param id Product wishlist ID
     * @param itemId Product wishlist item ID
     * @returns AmarantProductWishlist Resource deleted.
     * @throws ApiError
     */
    static removeWishlistItem(id, itemId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/product-wishlists/v1/{id}/items/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
        });
    }
}
