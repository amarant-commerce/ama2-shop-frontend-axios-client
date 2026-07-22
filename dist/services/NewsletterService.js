export class NewsletterService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Confirm sales newsletter subscription.
     * Confirm sales newsletter subscription.
     * @param c Confirmation hash
     * @returns void
     * @throws ApiError
     */
    salesNewslettersConfirm(c) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-newsletters/v1/confirm',
            query: {
                'c': c,
            },
            errors: {
                400: `Subscription not allowed / Subscription not found`,
            },
        });
    }
    /**
     * Subscribe logged in customer to newsletter.
     * Subscribe logged in customer to newsletter.
     *
     * Required identity types:
     * * customer
     * @returns AmarantSalesNewsletterSubscribeResultModel OK
     * @throws ApiError
     */
    salesNewslettersSubscribe() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-newsletters/v1/subscribe',
            errors: {
                400: `Subscription not allowed`,
            },
        });
    }
    /**
     * Subscribe guest customer to newsletter.
     * Subscribe guest customer to newsletter.
     *
     * Required identity types:
     * * guest
     * @param requestBody
     * @returns AmarantSalesNewsletterSubscribeResultModel OK
     * @throws ApiError
     */
    salesNewslettersSubscribeGuest(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-newsletters/v1/subscribe-guest',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Subscription not allowed`,
            },
        });
    }
    /**
     * Unsubscribe logged in customer from newsletter.
     * Unsubscribe logged in customer from newsletter.
     *
     * Required identity types:
     * * customer
     * @returns AmarantSalesNewsletterSubscribeResultModel OK
     * @throws ApiError
     */
    salesNewslettersUnsubscribe() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-newsletters/v1/unsubscribe',
        });
    }
}
