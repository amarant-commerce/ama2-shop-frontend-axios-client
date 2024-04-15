import type { AmarantErrorDetailsItemError } from './AmarantErrorDetailsItemError';
export type AmarantErrorDetailsItem = {
    messageId: string;
    text: string;
    errors: Array<AmarantErrorDetailsItemError>;
};
