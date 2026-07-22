export class AttributesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getAttributeCollection(include, exclude) {
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
    getAttributeItem() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/attributes/v1/{id}',
        });
    }
}
