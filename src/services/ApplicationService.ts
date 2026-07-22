/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApplicationStateModel } from '../models/AmarantApplicationStateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApplicationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get application state.
     * Get application state.
     * @returns AmarantApplicationStateModel OK
     * @throws ApiError
     */
    public getApplicationState(): CancelablePromise<AmarantApplicationStateModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/application/v1/state',
        });
    }
}
