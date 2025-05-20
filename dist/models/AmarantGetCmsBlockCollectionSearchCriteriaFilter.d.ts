export type AmarantGetCmsBlockCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * identifier: like
         * identifiers: ina
         * tag_ids: ina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * identifier: string
         * identifiers: array
         * tag_ids: array
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, identifier, identifiers, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
