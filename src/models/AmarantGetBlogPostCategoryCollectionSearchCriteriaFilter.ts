/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetBlogPostCategoryCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * parent_id: eq, null
         * name: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * parent_id: string, integer, boolean, boolean, boolean, null
         * name: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, parent_id, name, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

