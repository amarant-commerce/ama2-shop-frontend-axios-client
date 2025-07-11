export type AmarantSalesCheckoutAttributeModel = {
    code: string;
    systemCode: string;
    label: string;
    comment?: string | null;
    required: boolean;
    inputType: string;
    dataType: string;
    defaultValue?: string | null;
    options: Array<string>;
    validations: Array<string>;
    isArray: boolean;
    maxArrayLength: number;
};
