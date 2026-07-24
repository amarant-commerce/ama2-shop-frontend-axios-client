"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
class AiService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Send a message to a registered agent, creating or continuing a conversation.
     * Send a message to a registered agent, creating or continuing a conversation.
     *
     * Rate limiting:
     * - limit: 20
     * - interval: 1 minute
     * @param formData
     * @returns AmarantAiConversationOutputModel OK
     * @throws ApiError
     */
    sendMessage(formData) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/ai/v1/conversations',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                429: `Too many requests.`,
            },
        });
    }
}
exports.AiService = AiService;
