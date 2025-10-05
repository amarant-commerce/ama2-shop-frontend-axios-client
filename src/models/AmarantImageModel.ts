/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModelVariant } from './AmarantImageModelVariant';
export type AmarantImageModel = {
    width: number;
    height: number;
    variants: Array<AmarantImageModelVariant>;
    id: number;
    type: 'image';
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
};

