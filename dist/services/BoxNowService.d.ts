import type { AmarantBoxNowDestinationModel } from '../models/AmarantBoxNowDestinationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BoxNowService {
    /**
     * Get a single BOX NOW locker/destination by ID.
     * Get a single BOX NOW locker/destination by ID.
     * @param id BOX NOW locker (destination) ID.
     * @returns AmarantBoxNowDestinationModel OK
     * @throws ApiError
     */
    static getDestination(id: string): CancelablePromise<AmarantBoxNowDestinationModel>;
}
