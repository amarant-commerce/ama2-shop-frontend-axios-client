/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesNewsletterSubscribeResultModel } from '../models/AmarantSalesNewsletterSubscribeResultModel';
import type { SalesNewslettersSubscribeGuestInputAmarantSalesNewsletterInputModel } from '../models/SalesNewslettersSubscribeGuestInputAmarantSalesNewsletterInputModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NewsletterService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Confirm sales newsletter subscription.
     * Confirm sales newsletter subscription.
     * @param c Confirmation hash
     * @returns void
     * @throws ApiError
     */
    public salesNewslettersConfirm(
        c: string,
    ): CancelablePromise<void> {
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
    public salesNewslettersSubscribe(): CancelablePromise<AmarantSalesNewsletterSubscribeResultModel> {
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
    public salesNewslettersSubscribeGuest(
        requestBody: SalesNewslettersSubscribeGuestInputAmarantSalesNewsletterInputModel,
    ): CancelablePromise<AmarantSalesNewsletterSubscribeResultModel> {
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
    public salesNewslettersUnsubscribe(): CancelablePromise<AmarantSalesNewsletterSubscribeResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sales-newsletters/v1/unsubscribe',
        });
    }
}
