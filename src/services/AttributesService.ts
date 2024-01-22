/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantAttribute } from '../models/AmarantAttribute';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getAttributeCollection(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantAttribute>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get attribute item.
     * Get attribute item.
     * @param id Attribute ID
     * @returns AmarantAttribute OK
     * @throws ApiError
     */
    public static getAttributeItem(
        id: number,
    ): CancelablePromise<AmarantAttribute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
