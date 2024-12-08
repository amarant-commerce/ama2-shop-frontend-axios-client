import type { AmarantAnalyticsCookiePanelModel } from '../models/AmarantAnalyticsCookiePanelModel';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AnalyticsService {
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCookiePanelCollection(q?: AmarantGetCookiePanelCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantAnalyticsCookiePanelModel>;
    })>;
    /**
     * Get cookie panel item.
     * Get cookie panel item.
     * @param id Cookie panel ID
     * @returns AmarantAnalyticsCookiePanelModel OK
     * @throws ApiError
     */
    static getCookiePanelItem(id: number): CancelablePromise<AmarantAnalyticsCookiePanelModel>;
}
