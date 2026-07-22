import type { AmarantAliasUri } from '../models/AmarantAliasUri';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AliasService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Match URI.
     * Match URI.
     * @param uri URI to match.
     * @returns AmarantAliasUri OK
     * @throws ApiError
     */
    matchUri(uri: string): CancelablePromise<AmarantAliasUri>;
}
