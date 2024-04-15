export type AmarantAliasUri = {
    entityType: (number | string);
    entryId: (number | null | string | null);
    scope: (number | null | string | null);
    scopeCode: (number | null | string | null);
    sourceUri?: string | null;
    targetUri?: string | null;
    targetParams: Array<number>;
    targetType?: string | null;
};
