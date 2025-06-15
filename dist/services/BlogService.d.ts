import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantBlogPostCategoryModel } from '../models/AmarantBlogPostCategoryModel';
import type { AmarantBlogPostModel } from '../models/AmarantBlogPostModel';
import type { AmarantBlogPostTagModel } from '../models/AmarantBlogPostTagModel';
import type { AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter } from '../models/AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter';
import type { AmarantGetBlogPostCollectionSearchCriteriaFilter } from '../models/AmarantGetBlogPostCollectionSearchCriteriaFilter';
import type { AmarantGetBlogPostTagCollectionSearchCriteriaFilter } from '../models/AmarantGetBlogPostTagCollectionSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BlogService {
    /**
     * Get blog post collection.
     * Get blog post collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getBlogPostCollection(q?: AmarantGetBlogPostCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostModel>;
    })>;
    /**
     * Get blog post item.
     * Get blog post item.
     * @param id Blog post ID
     * @returns AmarantBlogPostModel OK
     * @throws ApiError
     */
    static getBlogPostItem(id: number): CancelablePromise<AmarantBlogPostModel>;
    /**
     * Get blog post tag collection.
     * Get blog post tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getBlogPostTagCollection(q?: AmarantGetBlogPostTagCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostTagModel>;
    })>;
    /**
     * Get blog post tag item.
     * Get blog post tag item.
     * @param id Blog post tag ID
     * @returns AmarantBlogPostTagModel OK
     * @throws ApiError
     */
    static getBlogPostTagItem(id: number): CancelablePromise<AmarantBlogPostTagModel>;
    /**
     * Get blog post category collection.
     * Get blog post category collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getBlogPostCategoryCollection(q?: AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostCategoryModel>;
    })>;
    /**
     * Get blog post category item.
     * Get blog post category item.
     * @param id Blog post category ID
     * @returns AmarantBlogPostCategoryModel OK
     * @throws ApiError
     */
    static getBlogPostCategoryItem(id: number): CancelablePromise<AmarantBlogPostCategoryModel>;
}
