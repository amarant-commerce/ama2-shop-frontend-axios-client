/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantBlogPostCategoryModel } from '../models/AmarantBlogPostCategoryModel';
import type { AmarantBlogPostModel } from '../models/AmarantBlogPostModel';
import type { AmarantBlogPostTagModel } from '../models/AmarantBlogPostTagModel';
import type { AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter } from '../models/AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter';
import type { AmarantGetBlogPostCollectionSearchCriteriaFilter } from '../models/AmarantGetBlogPostCollectionSearchCriteriaFilter';
import type { AmarantGetBlogPostTagCollectionSearchCriteriaFilter } from '../models/AmarantGetBlogPostTagCollectionSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BlogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get blog post collection.
     * Get blog post collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public getBlogPostCollection(
        q?: AmarantGetBlogPostCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/posts',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get blog post item.
     * Get blog post item.
     * @param id Blog post ID
     * @returns AmarantBlogPostModel OK
     * @throws ApiError
     */
    public getBlogPostItem(
        id: number,
    ): CancelablePromise<AmarantBlogPostModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/posts/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get blog post tag collection.
     * Get blog post tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public getBlogPostTagCollection(
        q?: AmarantGetBlogPostTagCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostTagModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get blog post tag item.
     * Get blog post tag item.
     * @param id Blog post tag ID
     * @returns AmarantBlogPostTagModel OK
     * @throws ApiError
     */
    public getBlogPostTagItem(
        id: number,
    ): CancelablePromise<AmarantBlogPostTagModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get blog post category collection.
     * Get blog post category collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public getBlogPostCategoryCollection(
        q?: AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostCategoryModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/categories',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get blog post category item.
     * Get blog post category item.
     * @param id Blog post category ID
     * @returns AmarantBlogPostCategoryModel OK
     * @throws ApiError
     */
    public getBlogPostCategoryItem(
        id: number,
    ): CancelablePromise<AmarantBlogPostCategoryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/categories/{id}',
            path: {
                'id': id,
            },
        });
    }
}
