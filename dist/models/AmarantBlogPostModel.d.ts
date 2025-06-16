import type { AmarantBlogPostAuthorModel } from './AmarantBlogPostAuthorModel';
import type { AmarantBlogPostTagModel } from './AmarantBlogPostTagModel';
import type { AmarantBlogPostVersionModel } from './AmarantBlogPostVersionModel';
export type AmarantBlogPostModel = {
    id: number;
    categoryIds: Array<number>;
    tags: Array<AmarantBlogPostTagModel>;
    author?: AmarantBlogPostAuthorModel | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    content?: AmarantBlogPostVersionModel | null;
    createdAt: string;
    updatedAt: string;
};
