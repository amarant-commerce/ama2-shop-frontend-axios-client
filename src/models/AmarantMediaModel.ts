/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantMediaFileModel } from './AmarantMediaFileModel';
import type { AmarantMediaVideoModel } from './AmarantMediaVideoModel';
export type AmarantMediaModel = (AmarantImageModel | AmarantMediaVideoModel | AmarantMediaFileModel | {
    type: string;
});

