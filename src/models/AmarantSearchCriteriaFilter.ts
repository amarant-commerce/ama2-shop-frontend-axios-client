/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like';
        value?: number | number | string | boolean | any[] | null;
    }>>;
};

