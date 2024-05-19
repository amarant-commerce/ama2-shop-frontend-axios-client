import type { AmarantPlacedOrderResultModel } from '../models/AmarantPlacedOrderResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OrdersService {
    /**
     * Place order.
     * Place order.
     * @param cartId Cart ID.
     * @returns AmarantPlacedOrderResultModel Resource created.
     * @throws ApiError
     */
    static placeOrder(cartId: string): CancelablePromise<AmarantPlacedOrderResultModel>;
}
