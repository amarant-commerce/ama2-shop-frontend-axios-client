/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

