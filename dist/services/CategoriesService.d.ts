import type { AmarantProductCategoryNodeItem } from '../models/AmarantProductCategoryNodeItem';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CategoriesService {
    /**
     * Get product category item.
     * Get product category item.
     * @param id Category ID
     * @returns AmarantProductCategoryNodeItem OK
     * @throws ApiError
     */
    static getCategoryItem(id: number): CancelablePromise<AmarantProductCategoryNodeItem>;
}
