/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCmsBannerItemModel } from './AmarantCmsBannerItemModel';
export type AmarantCmsBannerModel = {
    id: number;
    active: boolean;
    identifier: string;
    autoplay: boolean;
    autoplayDelay: number;
    navigation: boolean;
    pagination: boolean;
    items: Array<AmarantCmsBannerItemModel>;
    createdAt: string;
    updatedAt: string;
};

