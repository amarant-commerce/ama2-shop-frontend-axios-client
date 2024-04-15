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
    static matchUri(uri) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alias/v1/match',
            query: {
                'uri': uri,
            },
        });
    }
}
