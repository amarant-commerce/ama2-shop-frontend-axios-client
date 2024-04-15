import type { AmarantApiError } from './AmarantApiError';
export type AmarantApiCollectionResponse = {
    meta: Record<string, (string | number | boolean | null) | null>;
    errors?: Array<AmarantApiError> | null;
    data: Record<string, any>;
};
