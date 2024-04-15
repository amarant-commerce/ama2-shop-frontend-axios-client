import type { AddItemToCartInputAmarantSalesCartItemInputProductDto } from '../models/AddItemToCartInputAmarantSalesCartItemInputProductDto';
import type { AmarantCartModel } from '../models/AmarantCartModel';
import type { UpdateCartItemInputAmarantSalesCartItemUpdateInputDto } from '../models/UpdateCartItemInputAmarantSalesCartItemUpdateInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CartsService {
    /**
     * Create cart.
     * Create cart.
     * @returns AmarantCartModel Resource created.
     * @throws ApiError
     */
    static createCart(): CancelablePromise<AmarantCartModel>;
    /**
     * Get cart.
     * Get cart.
     * @param id Cart ID.
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static getCart(id: string): CancelablePromise<AmarantCartModel>;
    /**
     * Add item to cart.
     * Add item to cart.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static addItemToCart(id: string, requestBody?: AddItemToCartInputAmarantSalesCartItemInputProductDto): CancelablePromise<AmarantCartModel>;
    /**
     * Remove cart item.
     * Remove cart item.
     * @param id Cart ID.
     * @param itemId Cart Item ID.
     * @returns AmarantCartModel Resource deleted.
     * @throws ApiError
     */
    static removeCartItem(id: string, itemId: string): CancelablePromise<AmarantCartModel>;
    /**
     * Update cart item.
     * Update cart item.
     * @param id Cart ID.
     * @param itemId Cart Item ID.
     * @param requestBody
     * @returns AmarantCartModel Resource updated.
     * @throws ApiError
     */
    static updateCartItem(id: string, itemId: string, requestBody?: UpdateCartItemInputAmarantSalesCartItemUpdateInputDto): CancelablePromise<AmarantCartModel>;
}
