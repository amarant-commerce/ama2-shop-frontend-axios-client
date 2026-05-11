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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getCountryCollection(
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryCountryModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries',
            query: {
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get country region collection.
     * Get country region collection.
     * @param id Country ID
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getCountryRegionCollection(
        id: string,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryRegionModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries/{id}/regions',
            path: {
                'id': id,
            },
            query: {
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
