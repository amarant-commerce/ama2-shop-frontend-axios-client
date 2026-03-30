import type { AmarantTotalCodeModel } from './AmarantTotalCodeModel';
import type { AmarantTotalLabelModel } from './AmarantTotalLabelModel';
export type AmarantOrderTotalModel = {
    id: string;
    code: AmarantTotalCodeModel;
    label: AmarantTotalLabelModel;
    baseAmount: number;
    amount: number;
    baseAmountFormatted: string;
    amountFormatted: string;
    position: number;
};
