"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliasService = void 0;
class AliasService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Match URI.
     * Match URI.
     * @param uri URI to match.
     * @returns AmarantAliasUri OK
     * @throws ApiError
     */
    matchUri(uri) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/alias/v1/match',
            query: {
                'uri': uri,
            },
        });
    }
}
exports.AliasService = AliasService;
