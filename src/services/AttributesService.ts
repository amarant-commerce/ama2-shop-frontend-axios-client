/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantAttributeModel } from '../models/AmarantAttributeModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttributesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public getAttributeCollection(
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantAttributeModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/attributes/v1',
            query: {
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get attribute item.
     * Get attribute item.
     * @returns AmarantAttributeModel OK
     * @throws ApiError
     */
    public getAttributeItem(): CancelablePromise<AmarantAttributeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/attributes/v1/{id}',
        });
    }
}
