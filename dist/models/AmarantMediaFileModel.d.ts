export type AmarantMediaFileModel = {
    id: number;
    type: 'file';
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
};
