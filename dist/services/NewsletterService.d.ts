import type { AmarantSalesNewsletterSubscribeResultModel } from '../models/AmarantSalesNewsletterSubscribeResultModel';
import type { SalesNewslettersSubscribeGuestInputAmarantSalesNewsletterInputModel } from '../models/SalesNewslettersSubscribeGuestInputAmarantSalesNewsletterInputModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class NewsletterService {
    /**
     * Confirm sales newsletter subscription.
     * Confirm sales newsletter subscription.
     * @param c Confirmation hash
     * @returns void
     * @throws ApiError
     */
    static salesNewslettersConfirm(c: string): CancelablePromise<void>;
    /**
     * Subscribe logged in customer to newsletter.
     * Subscribe logged in customer to newsletter.
     *
     * Required identity types:
     * * customer
     * @returns AmarantSalesNewsletterSubscribeResultModel OK
     * @throws ApiError
     */
    static salesNewslettersSubscribe(): CancelablePromise<AmarantSalesNewsletterSubscribeResultModel>;
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
    static salesNewslettersSubscribeGuest(requestBody: SalesNewslettersSubscribeGuestInputAmarantSalesNewsletterInputModel): CancelablePromise<AmarantSalesNewsletterSubscribeResultModel>;
    /**
     * Unsubscribe logged in customer from newsletter.
     * Unsubscribe logged in customer from newsletter.
     *
     * Required identity types:
     * * customer
     * @returns AmarantSalesNewsletterSubscribeResultModel OK
     * @throws ApiError
     */
    static salesNewslettersUnsubscribe(): CancelablePromise<AmarantSalesNewsletterSubscribeResultModel>;
}
