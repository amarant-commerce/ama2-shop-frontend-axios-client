import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCmsPageModel } from '../models/AmarantCmsPageModel';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CmsService {
    /**
     * Get CMS page collection.
     * Get CMS page collection.
     * @param q Search criteria query.
     * @param page PageModel.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsPageCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageModel>;
    })>;
    /**
     * Get CMS page item.
     * Get CMS page item.
     * @param id PageModel ID
     * @returns AmarantCmsPageModel OK
     * @throws ApiError
     */
    static getCmsPageItem(id: number): CancelablePromise<AmarantCmsPageModel>;
}
