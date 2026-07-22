import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantDirectoryCountryModel } from '../models/AmarantDirectoryCountryModel';
import type { AmarantDirectoryRegionModel } from '../models/AmarantDirectoryRegionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DirectoryService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get country collection.
     * Get country collection.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCountryCollection(include?: string, exclude?: string): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryCountryModel>;
    })>;
    /**
     * Get country region collection.
     * Get country region collection.
     * @param id Country ID
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCountryRegionCollection(id: string, include?: string, exclude?: string): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantDirectoryRegionModel>;
    })>;
}
