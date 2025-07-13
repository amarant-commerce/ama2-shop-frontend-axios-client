import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCartQuoteModel } from '../models/AmarantCartQuoteModel';
import type { AmarantGetQuoteCollectionSearchCriteriaFilter } from '../models/AmarantGetQuoteCollectionSearchCriteriaFilter';
import type { AmarantRequestedQuoteResultModel } from '../models/AmarantRequestedQuoteResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class QuotesService {
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
    static requestQuote(cartId: string): CancelablePromise<AmarantRequestedQuoteResultModel>;
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
    static getQuote(id: number): CancelablePromise<AmarantCartQuoteModel>;
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
    static getQuoteCollection(q?: AmarantGetQuoteCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCartQuoteModel>;
    })>;
}
