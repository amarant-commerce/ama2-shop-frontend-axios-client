/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCollectionSearchCriteriaFilter';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantPlacedOrderResultModel } from '../models/AmarantPlacedOrderResultModel';
import type { PlaceOrderInputAmarantSalesPlaceOrderInputDto } from '../models/PlaceOrderInputAmarantSalesPlaceOrderInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrdersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Place order.
     * Place order.
     * @param cartId Cart ID.
     * @param requestBody
     * @returns AmarantPlacedOrderResultModel Resource created.
     * @throws ApiError
     */
    public placeOrder(
        cartId: string,
        requestBody: PlaceOrderInputAmarantSalesPlaceOrderInputDto,
    ): CancelablePromise<AmarantPlacedOrderResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/orders/v1/place/{cartId}',
            path: {
                'cartId': cartId,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    public getOrderItem(
        id: number,
    ): CancelablePromise<AmarantOrderModel> {
        return this.httpRequest.request({
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public getOrderCollection(
        q?: AmarantGetOrderCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/orders/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get guest order item.
     * Get guest order item.
     *
     * Required identity types:
     * * guest
     * @param guestCode Order guest code.
     * @returns AmarantOrderModel OK
     * @throws ApiError
     */
    public getGuestOrderItem(
        guestCode: string,
    ): CancelablePromise<AmarantOrderModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/orders/v1/guest-order/{guestCode}',
            path: {
                'guestCode': guestCode,
            },
        });
    }
}
