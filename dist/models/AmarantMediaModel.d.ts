import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantMediaFileModel } from './AmarantMediaFileModel';
import type { AmarantMediaVideoModel } from './AmarantMediaVideoModel';
export type AmarantMediaModel = (AmarantImageModel | AmarantMediaVideoModel | AmarantMediaFileModel | {
    type: string;
});
