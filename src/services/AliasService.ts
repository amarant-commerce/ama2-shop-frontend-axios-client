/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAliasUri } from '../models/AmarantAliasUri';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AliasService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Match URI.
     * Match URI.
     * @param uri URI to match.
     * @returns AmarantAliasUri OK
     * @throws ApiError
     */
    public matchUri(
        uri: string,
    ): CancelablePromise<AmarantAliasUri> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/alias/v1/match',
            query: {
                'uri': uri,
            },
        });
    }
}
