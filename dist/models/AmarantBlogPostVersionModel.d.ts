export type AmarantBlogPostVersionModel = {
    id: number;
    version: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};
