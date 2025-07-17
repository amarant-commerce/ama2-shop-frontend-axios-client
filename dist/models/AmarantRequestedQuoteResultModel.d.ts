import type { AmarantCartQuoteModel } from './AmarantCartQuoteModel';
export type AmarantRequestedQuoteResultModel = {
    successUrl: string;
    quote: AmarantCartQuoteModel;
    metadata: Record<string, (string | number | boolean | Record<string, any> | null) | null>;
};
