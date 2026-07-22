/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCookiePanelModel } from '../models/AmarantCookiePanelModel';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
import type { RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto } from '../models/RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AnalyticsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    public getCookiePanelCollection(
        q?: AmarantGetCookiePanelCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCookiePanelModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cookie-panels/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get cookie panel item.
     * Get cookie panel item.
     * @param id Cookie panel ID
     * @returns AmarantCookiePanelModel OK
     * @throws ApiError
     */
    public getCookiePanelItem(
        id: number,
    ): CancelablePromise<AmarantCookiePanelModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cookie-panels/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Record cookie panel consent history.
     * Record cookie panel consent history.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public recordCookiePanelConsentHistory(
        requestBody: RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/cookie-panels/v1/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid identity.`,
                404: `Cookie panel / Cookie panel item not found.`,
            },
        });
    }
}
