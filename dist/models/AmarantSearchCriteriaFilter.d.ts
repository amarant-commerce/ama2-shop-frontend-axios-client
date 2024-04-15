export type AmarantSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
