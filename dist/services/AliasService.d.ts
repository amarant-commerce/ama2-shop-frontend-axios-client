import type { AmarantAliasUri } from '../models/AmarantAliasUri';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AliasService {
    /**
     * Match URI.
     * Match URI.
     * @param uri URI to match.
     * @returns AmarantAliasUri OK
     * @throws ApiError
     */
    static matchUri(uri: string): CancelablePromise<AmarantAliasUri>;
}
