import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Place order.
     * Place order.
     * @param cartId Cart ID.
     * @returns AmarantPlacedOrderResultModel Resource created.
     * @throws ApiError
     */
    static placeOrder(cartId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/orders/v1/place/{cartId}',
            path: {
                'cartId': cartId,
            },
        });
    }
}
