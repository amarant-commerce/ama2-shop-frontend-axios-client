import type { AddItemsToWishlistInputAmarantAddProductsToWishlistInput } from '../models/AddItemsToWishlistInputAmarantAddProductsToWishlistInput';
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantProductCategoryNodeItem } from '../models/AmarantProductCategoryNodeItem';
import type { AmarantProductCategoryRelationOutputModel } from '../models/AmarantProductCategoryRelationOutputModel';
import type { AmarantProductModel } from '../models/AmarantProductModel';
import type { AmarantProductWishlist } from '../models/AmarantProductWishlist';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CreateProductWishlistInputAmarantCreateProductWishlistInput } from '../models/CreateProductWishlistInputAmarantCreateProductWishlistInput';
import type { UpdateProductWishlistInputAmarantUpdateProductWishlistInput } from '../models/UpdateProductWishlistInputAmarantUpdateProductWishlistInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ProductsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    getProductCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string, visibility?: Array<'visible' | 'url' | 'search' | 'hidden'>): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductModel>;
    })>;
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
    getSearchProductCollection(query: string, q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductModel>;
    })>;
    /**
     * Get product item.
     * Get product item.
     * @param id Product ID
     * @returns AmarantProductModel OK
     * @throws ApiError
     */
    getProductItem(id: number): CancelablePromise<AmarantProductModel>;
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    getCategoryItem(id: number): CancelablePromise<AmarantProductCategoryNodeItem>;
    /**
     * Get product category relations collection.
     * Get product category relations collection.
     * @param id Root category ID
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getProductCategoryRelationsCollection(id: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantProductCategoryRelationOutputModel>;
    })>;
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
    getProductWishlistCollection(include?: string, exclude?: string): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantProductWishlist>;
    })>;
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
    createProductWishlist(requestBody: CreateProductWishlistInputAmarantCreateProductWishlistInput): CancelablePromise<AmarantProductWishlist>;
    /**
     * Get product wishlist collection item.
     * Get product wishlist collection item.
     * @param id Product wishlist ID
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    getProductWishlistCollectionItem(id: string): CancelablePromise<AmarantProductWishlist>;
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
    removeProductWishlist(id: string): CancelablePromise<AmarantProductWishlist>;
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
    updateProductWishlist(id: string, requestBody: UpdateProductWishlistInputAmarantUpdateProductWishlistInput): CancelablePromise<AmarantProductWishlist>;
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
    addItemsToWishlist(id: string, requestBody: AddItemsToWishlistInputAmarantAddProductsToWishlistInput): CancelablePromise<AmarantProductWishlist>;
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
    removeWishlistItem(id: string, itemId: string): CancelablePromise<AmarantProductWishlist>;
}
