export type AmarantSalesTermsConditionsOutputDto = {
    id: number;
    name: string;
    subject: string;
    channelScopes: Array<string>;
    channelScopeIds: Array<number>;
    enabled: boolean;
    required: boolean;
    shortContent: string;
    content: string;
    createdAt: string;
    updatedAt: string;
};
