/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAiConversationOutputModel } from '../models/AmarantAiConversationOutputModel';
import type { SendMessageInputAmarantAiConversationInputDto } from '../models/SendMessageInputAmarantAiConversationInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    public sendMessage(
        formData: SendMessageInputAmarantAiConversationInputDto,
    ): CancelablePromise<AmarantAiConversationOutputModel> {
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
