/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddItemToCartInputAmarantSalesCartItemInputProductDto } from '../models/AddItemToCartInputAmarantSalesCartItemInputProductDto';
import type { AmarantCartModel } from '../models/AmarantCartModel';
import type { AmarantEstimatedShippingRateModelCollection } from '../models/AmarantEstimatedShippingRateModelCollection';
import type { GetAvailableShippingRatesInputAmarantSalesCartShippingRateEstimationGroup } from '../models/GetAvailableShippingRatesInputAmarantSalesCartShippingRateEstimationGroup';
import type { UpdateCartItemInputAmarantSalesCartItemUpdateInputDto } from '../models/UpdateCartItemInputAmarantSalesCartItemUpdateInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CartsService {
    /**
     * Create cart.
     * Create cart.
     * @returns AmarantCartModel Resource created.
     * @throws ApiError
     */
    public static createCart(): CancelablePromise<AmarantCartModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1',
        });
    }
    /**
     * Get cart.
     * Get cart.
     * @param id Cart ID.
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    public static getCart(
        id: string,
    ): CancelablePromise<AmarantCartModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/carts/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Add item to cart.
     * Add item to cart.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    public static addItemToCart(
        id: string,
        requestBody?: AddItemToCartInputAmarantSalesCartItemInputProductDto,
    ): CancelablePromise<AmarantCartModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/items',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get available shipping rates for cart.
     * Get available shipping rates for cart.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantEstimatedShippingRateModelCollection OK
     * @throws ApiError
     */
    public static getAvailableShippingRates(
        id: string,
        requestBody?: GetAvailableShippingRatesInputAmarantSalesCartShippingRateEstimationGroup,
    ): CancelablePromise<AmarantEstimatedShippingRateModelCollection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/shipping-rates',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove cart item.
     * Remove cart item.
     * @param id Cart ID.
     * @param itemId Cart Item ID.
     * @returns AmarantCartModel Resource deleted.
     * @throws ApiError
     */
    public static removeCartItem(
        id: string,
        itemId: string,
    ): CancelablePromise<AmarantCartModel> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/carts/v1/{id}/items/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
        });
    }
    /**
     * Update cart item.
     * Update cart item.
     * @param id Cart ID.
     * @param itemId Cart Item ID.
     * @param requestBody
     * @returns AmarantCartModel Resource updated.
     * @throws ApiError
     */
    public static updateCartItem(
        id: string,
        itemId: string,
        requestBody?: UpdateCartItemInputAmarantSalesCartItemUpdateInputDto,
    ): CancelablePromise<AmarantCartModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/carts/v1/{id}/items/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
