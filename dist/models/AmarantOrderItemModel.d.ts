import type { AmarantOrderAdjustmentModel } from './AmarantOrderAdjustmentModel';
import type { AmarantOrderProductModel } from './AmarantOrderProductModel';
export type AmarantOrderItemModel = {
    id: string;
    cartItemId?: string | null;
    paymentId?: string | null;
    product: AmarantOrderProductModel;
    parentProduct?: AmarantOrderProductModel | null;
    adjustments: Array<AmarantOrderAdjustmentModel>;
    basePriceExTax: number;
    basePrice: number;
    priceExTax: number;
    price: number;
    baseSalePriceExTax: number;
    baseSalePrice: number;
    salePriceExTax: number;
    salePrice: number;
    baseFinalPriceExTax: number;
    /**
     * Includes tax.
     */
    baseFinalPrice: number;
    finalPriceExTax: number;
    /**
     * Includes tax.
     */
    finalPrice: number;
    baseFinalPriceExTaxFormatted: string;
    /**
     * Includes tax.
     */
    baseFinalPriceFormatted: number;
    finalPriceExTaxFormatted: string;
    /**
     * Includes tax.
     */
    finalPriceFormatted: number;
    qty: string;
    baseRowTotalExTax: number;
    rowTotalExTax: number;
    baseRowTotalInclTax: number;
    rowTotalInclTax: number;
    baseTaxAmount: number;
    taxAmount: number;
    taxPercent: string;
    baseDiscountAmount: number;
    discountAmount: number;
    discountPercent: string;
};
