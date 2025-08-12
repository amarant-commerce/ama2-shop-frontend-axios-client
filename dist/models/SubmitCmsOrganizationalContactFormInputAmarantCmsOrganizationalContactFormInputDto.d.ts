export type SubmitCmsOrganizationalContactFormInputAmarantCmsOrganizationalContactFormInputDto = {
    name: string;
    companyName: string;
    email: string;
    phone: string;
    website?: string | null;
    message: string;
    attributes?: Record<string, string | number | number | boolean | any[] | null>;
    captcha?: string | null;
};
