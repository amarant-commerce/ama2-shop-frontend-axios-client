/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantBoxNowDestinationModel } from '../models/AmarantBoxNowDestinationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BoxNowService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a single BOX NOW locker/destination by ID.
     * Get a single BOX NOW locker/destination by ID.
     * @param id BOX NOW locker (destination) ID.
     * @returns AmarantBoxNowDestinationModel OK
     * @throws ApiError
     */
    public getDestination(
        id: string,
    ): CancelablePromise<AmarantBoxNowDestinationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/boxnow/v1/destinations/{id}',
            path: {
                'id': id,
            },
        });
    }
}
