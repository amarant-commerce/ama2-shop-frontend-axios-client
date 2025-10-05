import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantMediaFileModel } from './AmarantMediaFileModel';
import type { AmarantMediaVideoModel } from './AmarantMediaVideoModel';
export type AmarantMediaModel = (AmarantImageModel | AmarantMediaVideoModel | AmarantMediaFileModel | {
    id: number;
    type: string;
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
});
