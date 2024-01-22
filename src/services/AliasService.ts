/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAliasUri } from '../models/AmarantAliasUri';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AliasService {
    /**
     * Match URI.
     * Match URI.
     * @param uri URI to match.
     * @returns AmarantAliasUri OK
     * @throws ApiError
     */
    public static matchUri(
        uri: string,
    ): CancelablePromise<AmarantAliasUri> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alias/v1/match',
            query: {
                'uri': uri,
            },
        });
    }
}
