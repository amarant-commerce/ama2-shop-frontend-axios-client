import type { AmarantApplicationStateModel } from '../models/AmarantApplicationStateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ApplicationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get application state.
     * Get application state.
     * @returns AmarantApplicationStateModel OK
     * @throws ApiError
     */
    getApplicationState(): CancelablePromise<AmarantApplicationStateModel>;
}
