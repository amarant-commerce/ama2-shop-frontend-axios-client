export class BlogService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get blog post collection.
     * Get blog post collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getBlogPostCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/posts',
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
     * Get blog post item.
     * Get blog post item.
     * @param id Blog post ID
     * @returns AmarantBlogPostModel OK
     * @throws ApiError
     */
    getBlogPostItem(id) {
        return this.httpRequest.request({
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getBlogPostTagCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/tags',
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
     * Get blog post tag item.
     * Get blog post tag item.
     * @param id Blog post tag ID
     * @returns AmarantBlogPostTagModel OK
     * @throws ApiError
     */
    getBlogPostTagItem(id) {
        return this.httpRequest.request({
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    getBlogPostCategoryCollection(q, page, itemsPerPage, include, exclude) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/categories',
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
     * Get blog post category item.
     * Get blog post category item.
     * @param id Blog post category ID
     * @returns AmarantBlogPostCategoryModel OK
     * @throws ApiError
     */
    getBlogPostCategoryItem(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/blog/v1/categories/{id}',
            path: {
                'id': id,
            },
        });
    }
}
