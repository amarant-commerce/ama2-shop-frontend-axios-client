"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryService = void 0;
class DirectoryService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get country collection.
     * Get country collection.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCountryCollection(include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/directory/v1/countries',
            query: {
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get country region collection.
     * Get country region collection.
     * @param id Country ID
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCountryRegionCollection(id, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/directory/v1/countries/{id}/regions',
            path: {
                'id': id,
            },
            query: {
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
exports.DirectoryService = DirectoryService;
