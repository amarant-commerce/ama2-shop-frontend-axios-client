/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCookiePanelModel } from '../models/AmarantCookiePanelModel';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
import type { RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto } from '../models/RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalyticsService {
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCookiePanelCollection(
        q?: AmarantGetCookiePanelCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCookiePanelModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cookie-panels/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    public static getCookiePanelItem(
        id: number,
    ): CancelablePromise<AmarantCookiePanelModel> {
        return __request(OpenAPI, {
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
    public static recordCookiePanelConsentHistory(
        requestBody: RecordCookiePanelConsentHistoryInputAmarantCookiePanelConsentHistoryInputDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
