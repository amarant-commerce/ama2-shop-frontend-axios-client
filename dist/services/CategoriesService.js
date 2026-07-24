"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
class CategoriesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    getCategoryItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/categories/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
exports.CategoriesService = CategoriesService;
