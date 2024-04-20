import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CmsService {
    /**
     * Get CMS page collection.
     * Get CMS page collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCmsPageCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/pages',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    static getCmsPageItem(id) {
        return __request(OpenAPI, {
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
     * @returns any OK
     * @throws ApiError
     */
    static getCmsPageTagCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/pages/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    static getCmsPageTagItem(id) {
        return __request(OpenAPI, {
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
     * @returns any OK
     * @throws ApiError
     */
    static getCmsBlockCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    static getCmsBlockItem(id) {
        return __request(OpenAPI, {
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
     * @returns any OK
     * @throws ApiError
     */
    static getCmsBlockTagCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
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
    static getCmsBlockTagItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/v1/blocks/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
}
