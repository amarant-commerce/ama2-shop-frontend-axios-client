/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductCategoryNodeItem } from '../models/AmarantProductCategoryNodeItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CategoriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    public getCategoryItem(
        id: number,
    ): CancelablePromise<AmarantProductCategoryNodeItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/categories/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
