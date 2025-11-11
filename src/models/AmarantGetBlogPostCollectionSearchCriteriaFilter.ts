/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetBlogPostCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * category_ids: in, nin, ina, nina, aina, anina
         * tag_ids: in
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * category_ids: array
         * tag_ids: array
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, category_ids, tag_ids, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

