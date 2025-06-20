import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogService {
    /**
     * Get blog post collection.
     * Get blog post collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getBlogPostCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/posts',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get blog post item.
     * Get blog post item.
     * @param id Blog post ID
     * @returns AmarantBlogPostModel OK
     * @throws ApiError
     */
    static getBlogPostItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/posts/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get blog post tag collection.
     * Get blog post tag collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getBlogPostTagCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/tags',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get blog post tag item.
     * Get blog post tag item.
     * @param id Blog post tag ID
     * @returns AmarantBlogPostTagModel OK
     * @throws ApiError
     */
    static getBlogPostTagItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get blog post category collection.
     * Get blog post category collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getBlogPostCategoryCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/categories',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get blog post category item.
     * Get blog post category item.
     * @param id Blog post category ID
     * @returns AmarantBlogPostCategoryModel OK
     * @throws ApiError
     */
    static getBlogPostCategoryItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/v1/categories/{id}',
            path: {
                'id': id,
            },
        });
    }
}
