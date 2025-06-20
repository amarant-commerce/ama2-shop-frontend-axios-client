/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModel } from './AmarantImageModel';
export type AmarantSearchResultPostSearchResultItemModel = {
    attributes?: {
        id?: number;
        /**
         * Post title.
         */
        name?: string;
        /**
         * Post summary.
         */
        description?: string;
        url?: string;
        /**
         * Scoped category path. Ex.: /some-category, /en/some-category
         */
        path?: string;
        /**
         * Returns channel logo as URL if the post has no image.
         */
        image?: (string | AmarantImageModel);
    };
};

