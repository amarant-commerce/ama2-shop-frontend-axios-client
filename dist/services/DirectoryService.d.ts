import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantDirectoryCountryModel } from '../models/AmarantDirectoryCountryModel';
import type { AmarantDirectoryRegionModel } from '../models/AmarantDirectoryRegionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DirectoryService {
    /**
     * Get country collection.
     * Get country collection.
     * @returns any OK
     * @throws ApiError
     */
    static getCountryCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryCountryModel>;
    })>;
    /**
     * Get country region collection.
     * Get country region collection.
     * @param id Country ID
     * @returns any OK
     * @throws ApiError
     */
    static getCountryRegionCollection(id: string): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryRegionModel>;
    })>;
}
