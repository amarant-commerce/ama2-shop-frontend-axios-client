/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApplicationStateModel } from '../models/AmarantApplicationStateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationService {
    /**
     * Get application state.
     * Get application state.
     * @returns AmarantApplicationStateModel OK
     * @throws ApiError
     */
    public static getApplicationState(): CancelablePromise<AmarantApplicationStateModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/application/v1/state',
        });
    }
}
