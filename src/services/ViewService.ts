/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantNavigationContainer } from '../models/AmarantNavigationContainer';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ViewService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    public getNavigation(): CancelablePromise<AmarantNavigationContainer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/view/v1/navigation',
        });
    }
}
