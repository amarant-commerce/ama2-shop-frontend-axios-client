/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddItemToCartInputAmarantSalesCartItemInputProductDto } from '../models/AddItemToCartInputAmarantSalesCartItemInputProductDto';
import type { AmarantCartModel } from '../models/AmarantCartModel';
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
