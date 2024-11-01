/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCollectionSearchCriteriaFilter';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantPlacedOrderResultModel } from '../models/AmarantPlacedOrderResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static placeOrder(
        cartId: string,
    ): CancelablePromise<AmarantPlacedOrderResultModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/orders/v1/place/{cartId}',
            path: {
                'cartId': cartId,
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
    public static getOrderItem(
        id: number,
    ): CancelablePromise<AmarantOrderModel> {
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
    public static getOrderCollection(
        q?: AmarantGetOrderCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })> {
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
