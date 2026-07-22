/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCartQuoteModel } from '../models/AmarantCartQuoteModel';
import type { AmarantGetQuoteCollectionSearchCriteriaFilter } from '../models/AmarantGetQuoteCollectionSearchCriteriaFilter';
import type { AmarantRequestedQuoteResultModel } from '../models/AmarantRequestedQuoteResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QuotesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    public requestQuote(
        cartId: string,
    ): CancelablePromise<AmarantRequestedQuoteResultModel> {
        return this.httpRequest.request({
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
    public getQuote(
        id: number,
    ): CancelablePromise<AmarantCartQuoteModel> {
        return this.httpRequest.request({
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public getQuoteCollection(
        q?: AmarantGetQuoteCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCartQuoteModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/quotes/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
