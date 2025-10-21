export type AmarantProductOptionModel = {
    id: number;
    label: string;
    inputType: string;
    dataType: string;
    options: Array<string>;
    required: boolean;
    defaultValue?: string | null;
    description?: string | null;
    amount?: string | null;
    amountType?: string | null;
    sortOrder: number;
};
