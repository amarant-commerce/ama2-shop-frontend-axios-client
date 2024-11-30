import type { AmarantCartAdjustmentModel } from './AmarantCartAdjustmentModel';
import type { AmarantCartProductModel } from './AmarantCartProductModel';
export type AmarantCartItemModel = {
    id: string;
    paymentId?: string | null;
    product: AmarantCartProductModel;
    parentProduct?: AmarantCartProductModel | null;
    adjustments: Array<AmarantCartAdjustmentModel>;
    reservedUntil?: string | null;
    reservedQty?: string | null;
    basePriceExTax: number;
    basePrice: number;
    priceExTax: number;
    price: number;
    baseSalePriceExTax: number;
    baseSalePrice: number;
    salePriceExTax: number;
    salePrice: number;
    baseFinalPriceExTax: number;
    baseFinalPrice: number;
    finalPriceExTax: number;
    finalPrice: number;
    baseFinalPriceExTaxFormatted: string;
    baseFinalPriceFormatted: string;
    finalPriceExTaxFormatted: string;
    finalPriceFormatted: string;
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
