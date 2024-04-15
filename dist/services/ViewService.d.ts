import type { AmarantNavigationContainer } from '../models/AmarantNavigationContainer';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ViewService {
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    static getNavigation(): CancelablePromise<AmarantNavigationContainer>;
}
