/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAiConversationOutputModel } from '../models/AmarantAiConversationOutputModel';
import type { SendMessageInputAmarantAiConversationInputDto } from '../models/SendMessageInputAmarantAiConversationInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static sendMessage(
        formData: SendMessageInputAmarantAiConversationInputDto,
    ): CancelablePromise<AmarantAiConversationOutputModel> {
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
