import type { AmarantApplicationStateModel } from '../models/AmarantApplicationStateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ApplicationService {
    /**
     * Get application state.
     * Get application state.
     * @returns AmarantApplicationStateModel OK
     * @throws ApiError
     */
    static getApplicationState(): CancelablePromise<AmarantApplicationStateModel>;
}
