import type { AmarantApiError } from './AmarantApiError';
import type { AmarantApiLinks } from './AmarantApiLinks';
import type { AmarantSearchAggregationResultModel } from './AmarantSearchAggregationResultModel';
export type AmarantApiPaginatedCollectionResponse = {
    links?: AmarantApiLinks | null;
    aggregations?: Array<AmarantSearchAggregationResultModel> | null;
    meta: Record<string, (string | number | boolean | null) | null>;
    errors?: Array<AmarantApiError> | null;
    data: Record<string, any>;
};
