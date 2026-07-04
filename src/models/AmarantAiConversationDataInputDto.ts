/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantAiConversationDataInputDto = {
    /**
     * The registered agent to converse with.
     */
    agentId: string;
    /**
     * Existing conversation id to continue. Optional for agents that resolve their own conversation (e.g. via a logged-in identity) — required otherwise to keep continuity across requests.
     */
    conversationId?: string | null;
    /**
     * The message to send to the agent.
     */
    message: string;
};

