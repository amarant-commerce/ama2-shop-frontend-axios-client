import type { AmarantAiConversationOutputModel } from '../models/AmarantAiConversationOutputModel';
import type { SendMessageInputAmarantAiConversationInputDto } from '../models/SendMessageInputAmarantAiConversationInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AiService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    sendMessage(formData: SendMessageInputAmarantAiConversationInputDto): CancelablePromise<AmarantAiConversationOutputModel>;
}
