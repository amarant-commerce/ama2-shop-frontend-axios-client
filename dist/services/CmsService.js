"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsService = void 0;
class CmsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
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
    getCmsPageCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/pages',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get CMS page item.
     * Get CMS page item.
     * @param id Page ID
     * @returns AmarantCmsPageModel OK
     * @throws ApiError
     */
    getCmsPageItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/pages/{id}',
            path: {
                'id': id,
            },
        });
    }
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
    getCmsPageTagCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/pages/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get CMS page tag item.
     * Get CMS page tag item.
     * @param id Page tag ID
     * @returns AmarantCmsPageTagModel OK
     * @throws ApiError
     */
    getCmsPageTagItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/pages/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
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
    getCmsBlockCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/blocks',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get CMS block item.
     * Get CMS block item.
     * @param id Block ID
     * @returns AmarantCmsBlockModel OK
     * @throws ApiError
     */
    getCmsBlockItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/blocks/{id}',
            path: {
                'id': id,
            },
        });
    }
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
    getCmsBlockTagCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/blocks/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get CMS block tag item.
     * Get CMS block tag item.
     * @param id Block tag ID
     * @returns AmarantCmsBlockTagModel OK
     * @throws ApiError
     */
    getCmsBlockTagItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/blocks/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
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
    getCmsBannerCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/banners',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get CMS banner item.
     * Get CMS banner item.
     * @param id Banner ID
     * @returns AmarantCmsBannerModel OK
     * @throws ApiError
     */
    getCmsBannerItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/cms/v1/banners/{id}',
            path: {
                'id': id,
            },
        });
    }
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
    submitCmsContactForm(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/cms/v1/contact-form',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input.`,
                429: `Too many requests.`,
            },
        });
    }
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
    submitCmsOrganizationalContactForm(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/cms/v1/organizational-contact-form',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input.`,
                429: `Too many requests.`,
            },
        });
    }
}
exports.CmsService = CmsService;
