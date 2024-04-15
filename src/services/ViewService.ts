/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantNavigationContainer } from '../models/AmarantNavigationContainer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ViewService {
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    public static getNavigation(): CancelablePromise<AmarantNavigationContainer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/view/v1/navigation',
        });
    }
}
