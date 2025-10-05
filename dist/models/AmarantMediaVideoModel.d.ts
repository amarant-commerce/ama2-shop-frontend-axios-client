export type AmarantMediaVideoModel = {
    id: number;
    type: 'video';
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
};
