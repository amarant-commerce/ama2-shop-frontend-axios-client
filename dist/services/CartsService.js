export class CartsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Create cart.
     * Create cart.
     * @returns AmarantCartModel Resource created.
     * @throws ApiError
     */
    createCart() {
        return this.httpRequest.request({
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
    getCart(id) {
        return this.httpRequest.request({
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
    addItemToCart(id, requestBody) {
        return this.httpRequest.request({
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
    appendGuestCart(id) {
        return this.httpRequest.request({
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
    getAvailableShippingRates(id, requestBody) {
        return this.httpRequest.request({
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
    setShippingInformation(id, requestBody) {
        return this.httpRequest.request({
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
    getAvailablePaymentMethods(id) {
        return this.httpRequest.request({
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
    setPaymentInformation(id, requestBody) {
        return this.httpRequest.request({
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
    applyCartCoupon(id, requestBody) {
        return this.httpRequest.request({
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
    discardCartCoupon(id, requestBody) {
        return this.httpRequest.request({
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
    removeCartItem(id, itemId) {
        return this.httpRequest.request({
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
    updateCartItem(id, itemId, requestBody) {
        return this.httpRequest.request({
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
    /**
     * Update files for a product option on a cart item. Previous files will be removed.
     * Update files for a product option on a cart item. Previous files will be removed.
     * @param id Cart ID.
     * @param itemId Cart Item ID.
     * @param formData
     * @returns void
     * @throws ApiError
     */
    addCartItemProductOptionFiles(id, itemId, formData) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/carts/v1/{id}/items/{itemId}/product-option-files',
            path: {
                'id': id,
                'itemId': itemId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
