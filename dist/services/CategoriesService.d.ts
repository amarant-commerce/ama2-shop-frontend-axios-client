import type { AmarantProductCategoryNodeItem } from '../models/AmarantProductCategoryNodeItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CategoriesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    getCategoryItem(id: number): CancelablePromise<AmarantProductCategoryNodeItem>;
}
