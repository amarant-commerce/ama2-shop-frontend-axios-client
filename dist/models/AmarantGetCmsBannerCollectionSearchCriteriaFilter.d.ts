export type AmarantGetCmsBannerCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * active: eq
         * identifier: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * active: integer, string
         * identifier: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, active, identifier, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
