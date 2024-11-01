export type AmarantGetOrderCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * human_id: eq, like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * human_id: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, human_id, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
