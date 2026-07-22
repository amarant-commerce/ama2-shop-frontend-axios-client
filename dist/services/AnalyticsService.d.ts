import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCookiePanelModel } from '../models/AmarantCookiePanelModel';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
import type { RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto } from '../models/RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AnalyticsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCookiePanelCollection(q?: AmarantGetCookiePanelCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCookiePanelModel>;
    })>;
    /**
     * Get cookie panel item.
     * Get cookie panel item.
     * @param id Cookie panel ID
     * @returns AmarantCookiePanelModel OK
     * @throws ApiError
     */
    getCookiePanelItem(id: number): CancelablePromise<AmarantCookiePanelModel>;
    /**
     * Record cookie panel consent history.
     * Record cookie panel consent history.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    recordCookiePanelConsentHistory(requestBody: RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto): CancelablePromise<void>;
}
