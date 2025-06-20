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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogService {
    /**
     * Get blog post collection.
     * Get blog post collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getBlogPostCollection(
        q?: AmarantGetBlogPostCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/posts',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    public static getBlogPostItem(
        id: number,
    ): CancelablePromise<AmarantBlogPostModel> {
        return __request(OpenAPI, {
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
     * @returns any OK
     * @throws ApiError
     */
    public static getBlogPostTagCollection(
        q?: AmarantGetBlogPostTagCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostTagModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    public static getBlogPostTagItem(
        id: number,
    ): CancelablePromise<AmarantBlogPostTagModel> {
        return __request(OpenAPI, {
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
     * @returns any OK
     * @throws ApiError
     */
    public static getBlogPostCategoryCollection(
        q?: AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantBlogPostCategoryModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/categories',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    public static getBlogPostCategoryItem(
        id: number,
    ): CancelablePromise<AmarantBlogPostCategoryModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/categories/{id}',
            path: {
                'id': id,
            },
        });
    }
}
