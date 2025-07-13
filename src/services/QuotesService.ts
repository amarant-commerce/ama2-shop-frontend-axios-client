/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCartQuoteModel } from '../models/AmarantCartQuoteModel';
import type { AmarantGetQuoteCollectionSearchCriteriaFilter } from '../models/AmarantGetQuoteCollectionSearchCriteriaFilter';
import type { AmarantRequestedQuoteResultModel } from '../models/AmarantRequestedQuoteResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuotesService {
    /**
     * Request a quote from cart.
     * Request a quote from cart.
     *
     * Required identity types:
     * * customer
     * @param cartId Cart ID.
     * @returns AmarantRequestedQuoteResultModel Resource created.
     * @throws ApiError
     */
    public static requestQuote(
        cartId: string,
    ): CancelablePromise<AmarantRequestedQuoteResultModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/quotes/v1/{cartId}',
            path: {
                'cartId': cartId,
            },
            errors: {
                401: `Cart not found / Quotes not allowed.`,
            },
        });
    }
    /**
     * Get quote.
     * Get quote.
     *
     * Required identity types:
     * * customer
     * @param id Quote ID.
     * @returns AmarantCartQuoteModel OK
     * @throws ApiError
     */
    public static getQuote(
        id: number,
    ): CancelablePromise<AmarantCartQuoteModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quotes/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get quote collection.
     * Get quote collection.
     *
     * Required identity types:
     * * customer
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getQuoteCollection(
        q?: AmarantGetQuoteCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCartQuoteModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quotes/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
