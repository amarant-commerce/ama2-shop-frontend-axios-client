import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DirectoryService {
    /**
     * Get country collection.
     * Get country collection.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getCountryCollection(include, exclude) {
        return __request(OpenAPI, {
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
    static getCountryRegionCollection(id, include, exclude) {
        return __request(OpenAPI, {
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
