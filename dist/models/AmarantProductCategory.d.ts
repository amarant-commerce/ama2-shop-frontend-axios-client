export type AmarantProductCategory = {
    id: number;
    parentId?: number | null;
    name: string;
    path: string;
    scopedPath: string;
    filterable: boolean;
};
