import type { AmarantProductCategoryNodeItem } from './AmarantProductCategoryNodeItem';
import type { AmarantProductCategoryRelationChildCategoryOutputModel } from './AmarantProductCategoryRelationChildCategoryOutputModel';
export type AmarantProductCategoryRelationCategoryOutputModel = {
    parentCategory: AmarantProductCategoryNodeItem;
    childCategories: Array<AmarantProductCategoryRelationChildCategoryOutputModel>;
};
