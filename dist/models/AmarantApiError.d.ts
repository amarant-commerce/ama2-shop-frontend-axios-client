export type AmarantApiError = {
    status: (string | null | number | null);
    source?: string | null;
    title?: string | null;
    detail?: string | null;
};
