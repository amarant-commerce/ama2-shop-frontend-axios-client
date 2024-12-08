/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAnalyticsCookiePanelModel } from '../models/AmarantAnalyticsCookiePanelModel';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
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
        data: Array<AmarantAnalyticsCookiePanelModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analytics/v1/cookie-panels',
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
     * @returns AmarantAnalyticsCookiePanelModel OK
     * @throws ApiError
     */
    public static getCookiePanelItem(
        id: number,
    ): CancelablePromise<AmarantAnalyticsCookiePanelModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analytics/v1/cookie-panels/{id}',
            path: {
                'id': id,
            },
        });
    }
}
