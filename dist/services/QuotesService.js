"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
class QuotesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
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
    requestQuote(cartId) {
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
    getQuote(id) {
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
    getQuoteCollection(q, page, itemsPerPage, include, exclude) {
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
exports.QuotesService = QuotesService;
