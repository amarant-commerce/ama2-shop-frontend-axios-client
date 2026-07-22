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
import type { SubmitCmsOrganizationalContactFormInputAmarantCmsOrganizationalContactFormInputDto } from '../models/SubmitCmsOrganizationalContactFormInputAmarantCmsOrganizationalContactFormInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CmsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get CMS page collection.
     * Get CMS page collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCmsPageCollection(q?: AmarantGetCmsPageCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageModel>;
    })>;
    /**
     * Get CMS page item.
     * Get CMS page item.
     * @param id Page ID
     * @returns AmarantCmsPageModel OK
     * @throws ApiError
     */
    getCmsPageItem(id: number): CancelablePromise<AmarantCmsPageModel>;
    /**
     * Get CMS page tag collection.
     * Get CMS page tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCmsPageTagCollection(q?: AmarantGetCmsPageTagCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsPageTagModel>;
    })>;
    /**
     * Get CMS page tag item.
     * Get CMS page tag item.
     * @param id Page tag ID
     * @returns AmarantCmsPageTagModel OK
     * @throws ApiError
     */
    getCmsPageTagItem(id: number): CancelablePromise<AmarantCmsPageTagModel>;
    /**
     * Get CMS block collection.
     * Get CMS block collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCmsBlockCollection(q?: AmarantGetCmsBlockCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBlockModel>;
    })>;
    /**
     * Get CMS block item.
     * Get CMS block item.
     * @param id Block ID
     * @returns AmarantCmsBlockModel OK
     * @throws ApiError
     */
    getCmsBlockItem(id: number): CancelablePromise<AmarantCmsBlockModel>;
    /**
     * Get CMS block tag collection.
     * Get CMS block tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCmsBlockTagCollection(q?: AmarantGetCmsBlockTagCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBlockTagModel>;
    })>;
    /**
     * Get CMS block tag item.
     * Get CMS block tag item.
     * @param id Block tag ID
     * @returns AmarantCmsBlockTagModel OK
     * @throws ApiError
     */
    getCmsBlockTagItem(id: number): CancelablePromise<AmarantCmsBlockTagModel>;
    /**
     * Get CMS banner collection.
     * Get CMS banner collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getCmsBannerCollection(q?: AmarantGetCmsBannerCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCmsBannerModel>;
    })>;
    /**
     * Get CMS banner item.
     * Get CMS banner item.
     * @param id Banner ID
     * @returns AmarantCmsBannerModel OK
     * @throws ApiError
     */
    getCmsBannerItem(id: number): CancelablePromise<AmarantCmsBannerModel>;
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
    submitCmsContactForm(requestBody: InputAmarantCmsContactFormInputDto): CancelablePromise<void>;
    /**
     * Submit organizational contact form.
     * Submit organizational contact form.
     *
     * Rate limiting:
     * - limit: 30
     * - interval: 1 minute
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    submitCmsOrganizationalContactForm(requestBody: SubmitCmsOrganizationalContactFormInputAmarantCmsOrganizationalContactFormInputDto): CancelablePromise<void>;
}
