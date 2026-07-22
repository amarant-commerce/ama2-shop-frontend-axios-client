import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCollectionSearchCriteriaFilter';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantPlacedOrderResultModel } from '../models/AmarantPlacedOrderResultModel';
import type { PlaceOrderInputAmarantSalesPlaceOrderInputDto } from '../models/PlaceOrderInputAmarantSalesPlaceOrderInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrdersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Place order.
     * Place order.
     * @param cartId Cart ID.
     * @param requestBody
     * @returns AmarantPlacedOrderResultModel Resource created.
     * @throws ApiError
     */
    placeOrder(cartId: string, requestBody: PlaceOrderInputAmarantSalesPlaceOrderInputDto): CancelablePromise<AmarantPlacedOrderResultModel>;
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
    getOrderItem(id: number): CancelablePromise<AmarantOrderModel>;
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
    getOrderCollection(q?: AmarantGetOrderCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })>;
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
    getGuestOrderItem(guestCode: string): CancelablePromise<AmarantOrderModel>;
}
