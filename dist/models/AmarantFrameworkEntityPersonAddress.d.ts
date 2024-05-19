import type { AmarantFrameworkEntityPerson } from './AmarantFrameworkEntityPerson';
export type AmarantFrameworkEntityPersonAddress = {
    identifier?: string | null;
    street: Array<string>;
    postcode?: string | null;
    city?: string | null;
    regionId?: string | null;
    countryId?: string | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    person?: AmarantFrameworkEntityPerson | null;
};
