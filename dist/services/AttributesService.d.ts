import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantAttributeModel } from '../models/AmarantAttributeModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantAttributeModel>;
    })>;
}
