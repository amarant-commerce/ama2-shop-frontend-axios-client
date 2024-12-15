import type { AmarantErrorDetailsItemError } from './AmarantErrorDetailsItemError';
export type AmarantErrorDetailsItem = {
    messageId: string;
    text: string;
    errors: Array<AmarantErrorDetailsItemError>;
    data: Record<string, string | number | number | boolean | any[] | null>;
};
