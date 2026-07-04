/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAiConversationDataInputDto } from './AmarantAiConversationDataInputDto';
export type SendMessageInputAmarantAiConversationInputDto = {
    data: AmarantAiConversationDataInputDto;
    /**
     * Files to attach to the message (images, PDF documents). Up to 3.
     */
    files?: Array<Blob | null>;
};

