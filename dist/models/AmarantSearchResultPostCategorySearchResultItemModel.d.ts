import type { AmarantImageModel } from './AmarantImageModel';
export type AmarantSearchResultPostCategorySearchResultItemModel = {
    attributes?: {
        id?: number;
        /**
         * Category title.
         */
        name?: string;
        description?: string;
        url?: string;
        /**
         * Scoped category path. Ex.: /some-category, /en/some-category
         */
        path?: string;
        /**
         * Returns channel logo as URL if the category has no image.
         */
        image?: (string | AmarantImageModel);
    };
};
