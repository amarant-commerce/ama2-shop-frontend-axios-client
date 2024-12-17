/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantDirectoryCountryModel } from '../models/AmarantDirectoryCountryModel';
import type { AmarantDirectoryRegionModel } from '../models/AmarantDirectoryRegionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DirectoryService {
    /**
     * Get country collection.
     * Get country collection.
     * @returns any OK
     * @throws ApiError
     */
    public static getCountryCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryCountryModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries',
        });
    }
    /**
     * Get country region collection.
     * Get country region collection.
     * @param id Country ID
     * @returns any OK
     * @throws ApiError
     */
    public static getCountryRegionCollection(
        id: string,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryRegionModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries/{id}/regions',
            path: {
                'id': id,
            },
        });
    }
}
