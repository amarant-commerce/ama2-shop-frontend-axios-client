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
export declare class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductModel>;
    })>;
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
    static getSearchProductCollection(query: string, q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductModel>;
    })>;
    /**
     * Get product item.
     * Get product item.
     * @param id Product ID
     * @returns AmarantProductModel OK
     * @throws ApiError
     */
    static getProductItem(id: number): CancelablePromise<AmarantProductModel>;
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    static getCategoryItem(id: number): CancelablePromise<AmarantProductCategoryNodeItem>;
    /**
     * Get product category relations collection.
     * Get product category relations collection.
     * @param id Root category ID
     * @returns any OK
     * @throws ApiError
     */
    static getProductCategoryRelationsCollection(id: number): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantProductCategoryRelationOutputModel>;
    })>;
    /**
     * Get product wishlist collection.
     * Get product wishlist collection.
     *
     * Required identity types:
     * * customer
     * @returns any OK
     * @throws ApiError
     */
    static getProductWishlistCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
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
    static createProductWishlist(requestBody: CreateProductWishlistInputAmarantCreateProductWishlistInput): CancelablePromise<AmarantProductWishlist>;
    /**
     * Get product wishlist collection item.
     * Get product wishlist collection item.
     * @param id Product wishlist ID
     * @returns AmarantProductWishlist OK
     * @throws ApiError
     */
    static getProductWishlistCollectionItem(id: string): CancelablePromise<AmarantProductWishlist>;
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
    static removeProductWishlist(id: string): CancelablePromise<AmarantProductWishlist>;
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
    static updateProductWishlist(id: string, requestBody: UpdateProductWishlistInputAmarantUpdateProductWishlistInput): CancelablePromise<AmarantProductWishlist>;
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
    static addItemsToWishlist(id: string, requestBody: AddItemsToWishlistInputAmarantAddProductsToWishlistInput): CancelablePromise<AmarantProductWishlist>;
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
    static removeWishlistItem(id: string, itemId: string): CancelablePromise<AmarantProductWishlist>;
}
