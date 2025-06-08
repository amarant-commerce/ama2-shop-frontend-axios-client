import type { AmarantProductCategoryNodeItem } from './AmarantProductCategoryNodeItem';
import type { AmarantProductCategoryRelationCategoryOutputModel } from './AmarantProductCategoryRelationCategoryOutputModel';
export type AmarantProductCategoryRelationOutputModel = {
    rootCategory: AmarantProductCategoryNodeItem;
    categories: Array<AmarantProductCategoryRelationCategoryOutputModel>;
};
