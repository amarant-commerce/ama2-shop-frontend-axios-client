/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModelVariant } from './AmarantImageModelVariant';
export type AmarantMediaAttributeValueModel = {
    id: number;
    type: AmarantMediaAttributeValueModel.type;
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
    variants: Array<AmarantImageModelVariant>;
};
export namespace AmarantMediaAttributeValueModel {
    export enum type {
        IMAGE = 'image',
        VIDEO = 'video',
        FILE = 'file',
    }
}

