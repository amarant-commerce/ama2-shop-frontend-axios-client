/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAttributeDataTypeEnum } from './AmarantAttributeDataTypeEnum';
import type { AmarantAttributeInputTypeEnum } from './AmarantAttributeInputTypeEnum';
export type AmarantAttributeModel = {
    id: number;
    code: string;
    systemCode: string;
    entityName: string;
    type: AmarantAttributeDataTypeEnum;
    inputType: AmarantAttributeInputTypeEnum;
    labels: Record<string, Record<string, string>>;
    flags: Array<boolean>;
};

