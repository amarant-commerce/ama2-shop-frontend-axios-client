import type { AmarantNavigationContainer } from '../models/AmarantNavigationContainer';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ViewService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    getNavigation(): CancelablePromise<AmarantNavigationContainer>;
}
