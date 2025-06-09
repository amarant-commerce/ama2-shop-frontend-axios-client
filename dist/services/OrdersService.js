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
            errors: {
                401: `Cart not found / Guest orders not allowed.`,
            },
        });
    }
    /**
     * Get order item.
     * Get order item.
     *
     * Required identity types:
     * * customer
     * @param id Order ID.
     * @returns AmarantOrderModel OK
     * @throws ApiError
     */
    static getOrderItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get order collection.
     * Get order collection.
     *
     * Required identity types:
     * * customer
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
