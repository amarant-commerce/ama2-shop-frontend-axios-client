import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCmsBannerModel } from '../models/AmarantCmsBannerModel';
import type { AmarantCmsBlockModel } from '../models/AmarantCmsBlockModel';
import type { AmarantCmsBlockTagModel } from '../models/AmarantCmsBlockTagModel';
import type { AmarantCmsPageModel } from '../models/AmarantCmsPageModel';
import type { AmarantCmsPageTagModel } from '../models/AmarantCmsPageTagModel';
import type { AmarantGetCmsBannerCollectionSearchCriteriaFilter } from '../models/AmarantGetCmsBannerCollectionSearchCriteriaFilter';
import type { AmarantGetCmsBlockCollectionSearchCriteriaFilter } from '../models/AmarantGetCmsBlockCollectionSearchCriteriaFilter';
import type { AmarantGetCmsBlockTagCollectionSearchCriteriaFilter } from '../models/AmarantGetCmsBlockTagCollectionSearchCriteriaFilter';
import type { AmarantGetCmsPageCollectionSearchCriteriaFilter } from '../models/AmarantGetCmsPageCollectionSearchCriteriaFilter';
import type { AmarantGetCmsPageTagCollectionSearchCriteriaFilter } from '../models/AmarantGetCmsPageTagCollectionSearchCriteriaFilter';
import type { InputAmarantCmsContactFormInputDto } from '../models/InputAmarantCmsContactFormInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CmsService {
    /**
     * Get CMS page collection.
     * Get CMS page collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsPageCollection(q?: AmarantGetCmsPageCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageModel>;
    })>;
    /**
     * Get CMS page item.
     * Get CMS page item.
     * @param id Page ID
     * @returns AmarantCmsPageModel OK
     * @throws ApiError
     */
    static getCmsPageItem(id: number): CancelablePromise<AmarantCmsPageModel>;
    /**
     * Get CMS page tag collection.
     * Get CMS page tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsPageTagCollection(q?: AmarantGetCmsPageTagCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageTagModel>;
    })>;
    /**
     * Get CMS page tag item.
     * Get CMS page tag item.
     * @param id Page tag ID
     * @returns AmarantCmsPageTagModel OK
     * @throws ApiError
     */
    static getCmsPageTagItem(id: number): CancelablePromise<AmarantCmsPageTagModel>;
    /**
     * Get CMS block collection.
     * Get CMS block collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsBlockCollection(q?: AmarantGetCmsBlockCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBlockModel>;
    })>;
    /**
     * Get CMS block item.
     * Get CMS block item.
     * @param id Block ID
     * @returns AmarantCmsBlockModel OK
     * @throws ApiError
     */
    static getCmsBlockItem(id: number): CancelablePromise<AmarantCmsBlockModel>;
    /**
     * Get CMS block tag collection.
     * Get CMS block tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsBlockTagCollection(q?: AmarantGetCmsBlockTagCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBlockTagModel>;
    })>;
    /**
     * Get CMS block tag item.
     * Get CMS block tag item.
     * @param id Block tag ID
     * @returns AmarantCmsBlockTagModel OK
     * @throws ApiError
     */
    static getCmsBlockTagItem(id: number): CancelablePromise<AmarantCmsBlockTagModel>;
    /**
     * Get CMS banner collection.
     * Get CMS banner collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsBannerCollection(q?: AmarantGetCmsBannerCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBannerModel>;
    })>;
    /**
     * Get CMS banner item.
     * Get CMS banner item.
     * @param id Banner ID
     * @returns AmarantCmsBannerModel OK
     * @throws ApiError
     */
    static getCmsBannerItem(id: number): CancelablePromise<AmarantCmsBannerModel>;
    /**
     * Submit contact form.
     * Submit contact form.
     *
     * Rate limiting:
     * - limit: 30
     * - interval: 1 minute
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static submitCmsContactForm(requestBody: InputAmarantCmsContactFormInputDto): CancelablePromise<void>;
}
