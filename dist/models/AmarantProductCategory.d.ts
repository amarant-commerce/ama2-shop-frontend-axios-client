export type AmarantProductCategory = {
    id: number;
    parentId?: number | null;
    parentIds: Array<number>;
    name: string;
    path: string;
    scopedPath: string;
    filterable: boolean;
};
