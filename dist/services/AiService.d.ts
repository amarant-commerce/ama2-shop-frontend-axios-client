import type { AmarantAiConversationOutputModel } from '../models/AmarantAiConversationOutputModel';
import type { SendMessageInputAmarantAiConversationInputDto } from '../models/SendMessageInputAmarantAiConversationInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AiService {
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
    static sendMessage(formData: SendMessageInputAmarantAiConversationInputDto): CancelablePromise<AmarantAiConversationOutputModel>;
}
