import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeCollection() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1',
        });
    }
    /**
     * Get attribute item.
     * Get attribute item.
     * @returns AmarantAttributeModel OK
     * @throws ApiError
     */
    static getAttributeItem() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1/{id}',
        });
    }
}
