/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCartModel } from './AmarantCartModel';
export type AmarantCartQuoteModel = {
    id: number;
    state: number;
    stateText: string;
    customer?: string | null;
    organizationId?: number | null;
    organization?: string | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    cart: AmarantCartModel;
    createdAt: string;
    updatedAt: string;
};

