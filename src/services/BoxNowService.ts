/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantBoxNowDestinationModel } from '../models/AmarantBoxNowDestinationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BoxNowService {
    /**
     * Get a single BOX NOW locker/destination by ID.
     * Get a single BOX NOW locker/destination by ID.
     * @param id BOX NOW locker (destination) ID.
     * @returns AmarantBoxNowDestinationModel OK
     * @throws ApiError
     */
    public static getBoxnowDestinationItem(
        id: string,
    ): CancelablePromise<AmarantBoxNowDestinationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/boxnow/v1/destinations/{id}',
            path: {
                'id': id,
            },
        });
    }
}
