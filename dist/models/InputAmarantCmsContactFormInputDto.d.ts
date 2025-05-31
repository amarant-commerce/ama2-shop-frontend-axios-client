export type InputAmarantCmsContactFormInputDto = {
    name: string;
    email: string;
    phone?: string | null;
    subject: string;
    message: string;
    attributes?: Record<string, string | number | number | boolean | any[] | null>;
    captcha?: string | null;
};
