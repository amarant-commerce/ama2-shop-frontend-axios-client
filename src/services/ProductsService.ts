/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddItemsToWishlistInputAmarantAddProductsToWishlistInput } from '../models/AddItemsToWishlistInputAmarantAddProductsToWishlistInput';
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantProductCategoryNodeItem } from '../models/AmarantProductCategoryNodeItem';
import type { AmarantProductModel } from '../models/AmarantProductModel';
import type { AmarantProductWishlist } from '../models/AmarantProductWishlist';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CreateProductWishlistInputAmarantCreateProductWishlistInput } from '../models/CreateProductWishlistInputAmarantCreateProductWishlistInput';
import type { UpdateProductWishlistInputAmarantUpdateProductWishlistInput } from '../models/UpdateProductWishlistInputAmarantUpdateProductWishlistInput';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static getProductCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductModel>;
    })> {
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
    public static getSearchProductCollection(
        query: string,
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductModel>;
    })> {
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
    public static getProductItem(
        id: number,
    ): CancelablePromise<AmarantProductModel> {
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
    public static getCategoryItem(
        id: number,
    ): CancelablePromise<AmarantProductCategoryNodeItem> {
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
     *
     * Required identity types:
     * * customer
     * @returns any OK
     * @throws ApiError
     */
    public static getProductWishlistCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantProductWishlist>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product-wishlists/v1',
        });
    }
    /**
     * Create product wishlist.
     * Create product wishlist.
     *
     * Required identity types:
     * * customer
     * @param requestBody
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    public static createProductWishlist(
        requestBody: CreateProductWishlistInputAmarantCreateProductWishlistInput,
    ): CancelablePromise<AmarantProductWishlist> {
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
    public static getProductWishlistCollectionItem(
        id: string,
    ): CancelablePromise<AmarantProductWishlist> {
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
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @returns AmarantProductWishlist Resource deleted.
     * @throws ApiError
     */
    public static removeProductWishlist(
        id: string,
    ): CancelablePromise<AmarantProductWishlist> {
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
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @param requestBody
     * @returns AmarantProductWishlist Resource updated.
     * @throws ApiError
     */
    public static updateProductWishlist(
        id: string,
        requestBody: UpdateProductWishlistInputAmarantUpdateProductWishlistInput,
    ): CancelablePromise<AmarantProductWishlist> {
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
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @param requestBody
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    public static addItemsToWishlist(
        id: string,
        requestBody: AddItemsToWishlistInputAmarantAddProductsToWishlistInput,
    ): CancelablePromise<AmarantProductWishlist> {
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
     *
     * Required identity types:
     * * customer
     * @param id Product wishlist ID
     * @param itemId Product wishlist item ID
     * @returns AmarantProductWishlist Resource deleted.
     * @throws ApiError
     */
    public static removeWishlistItem(
        id: string,
        itemId: number,
    ): CancelablePromise<AmarantProductWishlist> {
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
