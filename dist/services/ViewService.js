export class ViewService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get navigation.
     * Get navigation.
     * @returns AmarantNavigationContainer
     * @throws ApiError
     */
    getNavigation() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/view/v1/navigation',
        });
    }
}
