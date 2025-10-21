import type { AddCartItemProductOptionFilesInputAmarantSalesCartItemInputProductOptionsFileItemDto } from '../models/AddCartItemProductOptionFilesInputAmarantSalesCartItemInputProductOptionsFileItemDto';
import type { AddItemToCartInputAmarantSalesCartItemInputProductDto } from '../models/AddItemToCartInputAmarantSalesCartItemInputProductDto';
import type { AmarantAvailablePaymentMethodModelCollection } from '../models/AmarantAvailablePaymentMethodModelCollection';
import type { AmarantCartModel } from '../models/AmarantCartModel';
import type { AmarantEstimatedShippingRateModelCollection } from '../models/AmarantEstimatedShippingRateModelCollection';
import type { ApplyCartCouponInputAmarantSalesCartCouponInputDto } from '../models/ApplyCartCouponInputAmarantSalesCartCouponInputDto';
import type { DiscardCartCouponInputAmarantSalesCartCouponInputDto } from '../models/DiscardCartCouponInputAmarantSalesCartCouponInputDto';
import type { GetAvailableShippingRatesInputAmarantSalesCartShippingRateEstimationGroup } from '../models/GetAvailableShippingRatesInputAmarantSalesCartShippingRateEstimationGroup';
import type { SetPaymentInformationInputAmarantSalesCartPaymentInformationInputGroupDto } from '../models/SetPaymentInformationInputAmarantSalesCartPaymentInformationInputGroupDto';
import type { SetShippingInformationInputAmarantSalesCartShippingInformationInputGroupDto } from '../models/SetShippingInformationInputAmarantSalesCartShippingInformationInputGroupDto';
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
    static addItemToCart(id: string, requestBody: AddItemToCartInputAmarantSalesCartItemInputProductDto): CancelablePromise<AmarantCartModel>;
    /**
     * Append guest cart items to current customer cart.
     * Append guest cart items to current customer cart.
     * @param id Guest cart ID.
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static appendGuestCart(id: string): CancelablePromise<AmarantCartModel>;
    /**
     * Get available shipping rates.
     * Get available shipping rates.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantEstimatedShippingRateModelCollection OK
     * @throws ApiError
     */
    static getAvailableShippingRates(id: string, requestBody: GetAvailableShippingRatesInputAmarantSalesCartShippingRateEstimationGroup): CancelablePromise<AmarantEstimatedShippingRateModelCollection>;
    /**
     * Set shipping information.
     * Set shipping information.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static setShippingInformation(id: string, requestBody: SetShippingInformationInputAmarantSalesCartShippingInformationInputGroupDto): CancelablePromise<AmarantCartModel>;
    /**
     * Get available payment methods.
     * Get available payment methods.
     * @param id Cart ID.
     * @returns AmarantAvailablePaymentMethodModelCollection OK
     * @throws ApiError
     */
    static getAvailablePaymentMethods(id: string): CancelablePromise<AmarantAvailablePaymentMethodModelCollection>;
    /**
     * Set payment information.
     * Set payment information.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static setPaymentInformation(id: string, requestBody: SetPaymentInformationInputAmarantSalesCartPaymentInformationInputGroupDto): CancelablePromise<AmarantCartModel>;
    /**
     * Apply cart coupon.
     * Apply cart coupon.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel OK
     * @throws ApiError
     */
    static applyCartCoupon(id: string, requestBody: ApplyCartCouponInputAmarantSalesCartCouponInputDto): CancelablePromise<AmarantCartModel>;
    /**
     * Discard cart coupon.
     * Discard cart coupon.
     * @param id Cart ID.
     * @param requestBody
     * @returns AmarantCartModel Resource deleted.
     * @throws ApiError
     */
    static discardCartCoupon(id: string, requestBody: DiscardCartCouponInputAmarantSalesCartCouponInputDto): CancelablePromise<AmarantCartModel>;
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
    static updateCartItem(id: string, itemId: string, requestBody: UpdateCartItemInputAmarantSalesCartItemUpdateInputDto): CancelablePromise<AmarantCartModel>;
    /**
     * Update files for a product option on a cart item. Previous files will be removed.
     * Update files for a product option on a cart item. Previous files will be removed.
     * @param id Cart ID.
     * @param itemId Cart Item ID.
     * @param formData
     * @returns void
     * @throws ApiError
     */
    static addCartItemProductOptionFiles(id: string, itemId: string, formData: AddCartItemProductOptionFilesInputAmarantSalesCartItemInputProductOptionsFileItemDto): CancelablePromise<void>;
}
