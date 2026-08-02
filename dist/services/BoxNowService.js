export class BoxNowService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a single BOX NOW locker/destination by ID.
     * Get a single BOX NOW locker/destination by ID.
     * @param id BOX NOW locker (destination) ID.
     * @returns AmarantBoxNowDestinationModel OK
     * @throws ApiError
     */
    getDestination(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/boxnow/v1/destinations/{id}',
            path: {
                'id': id,
            },
        });
    }
}
