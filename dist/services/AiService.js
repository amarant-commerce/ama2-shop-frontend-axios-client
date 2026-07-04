import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiService {
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
    static sendMessage(formData) {
        return __request(OpenAPI, {
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
