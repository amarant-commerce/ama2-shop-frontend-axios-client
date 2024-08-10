/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCmsBannerModel } from '../models/AmarantCmsBannerModel';
import type { AmarantCmsBlockModel } from '../models/AmarantCmsBlockModel';
import type { AmarantCmsBlockTagModel } from '../models/AmarantCmsBlockTagModel';
import type { AmarantCmsPageModel } from '../models/AmarantCmsPageModel';
import type { AmarantCmsPageTagModel } from '../models/AmarantCmsPageTagModel';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CmsService {
    /**
     * Get CMS page collection.
     * Get CMS page collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCmsPageCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/pages',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get CMS page item.
     * Get CMS page item.
     * @param id Page ID
     * @returns AmarantCmsPageModel OK
     * @throws ApiError
     */
    public static getCmsPageItem(
        id: number,
    ): CancelablePromise<AmarantCmsPageModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/pages/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get CMS page tag collection.
     * Get CMS page tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCmsPageTagCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageTagModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/pages/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get CMS page tag item.
     * Get CMS page tag item.
     * @param id Page tag ID
     * @returns AmarantCmsPageTagModel OK
     * @throws ApiError
     */
    public static getCmsPageTagItem(
        id: number,
    ): CancelablePromise<AmarantCmsPageTagModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/pages/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get CMS block collection.
     * Get CMS block collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCmsBlockCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBlockModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get CMS block item.
     * Get CMS block item.
     * @param id Block ID
     * @returns AmarantCmsBlockModel OK
     * @throws ApiError
     */
    public static getCmsBlockItem(
        id: number,
    ): CancelablePromise<AmarantCmsBlockModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get CMS block tag collection.
     * Get CMS block tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCmsBlockTagCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBlockTagModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get CMS block tag item.
     * Get CMS block tag item.
     * @param id Block tag ID
     * @returns AmarantCmsBlockTagModel OK
     * @throws ApiError
     */
    public static getCmsBlockTagItem(
        id: number,
    ): CancelablePromise<AmarantCmsBlockTagModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get CMS banner collection.
     * Get CMS banner collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCmsBannerCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBannerModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/banners',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get CMS banner item.
     * Get CMS banner item.
     * @param id Banner ID
     * @returns AmarantCmsBannerModel OK
     * @throws ApiError
     */
    public static getCmsBannerItem(
        id: number,
    ): CancelablePromise<AmarantCmsBannerModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/banners/{id}',
            path: {
                'id': id,
            },
        });
    }
}
