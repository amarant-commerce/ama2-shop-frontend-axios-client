export type AmarantBlogPostCategoryModel = {
    id: number;
    parentId?: number | null;
    url: string;
    path: string;
    createdAt: string;
    updatedAt: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};
