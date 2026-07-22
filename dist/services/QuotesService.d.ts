import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCartQuoteModel } from '../models/AmarantCartQuoteModel';
import type { AmarantGetQuoteCollectionSearchCriteriaFilter } from '../models/AmarantGetQuoteCollectionSearchCriteriaFilter';
import type { AmarantRequestedQuoteResultModel } from '../models/AmarantRequestedQuoteResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class QuotesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    requestQuote(cartId: string): CancelablePromise<AmarantRequestedQuoteResultModel>;
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
    getQuote(id: number): CancelablePromise<AmarantCartQuoteModel>;
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
    getQuoteCollection(q?: AmarantGetQuoteCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCartQuoteModel>;
    })>;
}
