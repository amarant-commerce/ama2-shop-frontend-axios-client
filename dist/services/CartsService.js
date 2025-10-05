import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CartsService {
    /**
     * Create cart.
     * Create cart.
     * @returns AmarantCartModel Resource created.
     * @throws ApiError
     */
    static createCart() {
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
    static getCart(id) {
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
    static addItemToCart(id, requestBody) {
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
     * Append guest cart items to current customer cart.
     * Append guest cart items to current customer cart.
     * @param id Guest cart ID.
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static appendGuestCart(id) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/append',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get available shipping rates.
     * Get available shipping rates.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantEstimatedShippingRateModelCollection OK
     * @throws ApiError
     */
    static getAvailableShippingRates(id, requestBody) {
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
     * Set shipping information.
     * Set shipping information.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static setShippingInformation(id, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/set-shipping-information',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get available payment methods.
     * Get available payment methods.
     * @param id Cart ID.
     * @returns AmarantAvailablePaymentMethodModelCollection OK
     * @throws ApiError
     */
    static getAvailablePaymentMethods(id) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/payment-methods',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Set payment information.
     * Set payment information.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static setPaymentInformation(id, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/set-payment-information',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Apply cart coupon.
     * Apply cart coupon.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static applyCartCoupon(id, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/carts/v1/{id}/coupons',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Discard cart coupon.
     * Discard cart coupon.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel Resource deleted.
     * @throws ApiError
     */
    static discardCartCoupon(id, requestBody) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/carts/v1/{id}/coupons',
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
    static removeCartItem(id, itemId) {
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
    static updateCartItem(id, itemId, requestBody) {
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
