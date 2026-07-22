/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AiService } from './services/AiService';
import { AliasService } from './services/AliasService';
import { AnalyticsService } from './services/AnalyticsService';
import { ApplicationService } from './services/ApplicationService';
import { AttributesService } from './services/AttributesService';
import { BlogService } from './services/BlogService';
import { CartsService } from './services/CartsService';
import { CategoriesService } from './services/CategoriesService';
import { CheckoutService } from './services/CheckoutService';
import { CmsService } from './services/CmsService';
import { CustomersService } from './services/CustomersService';
import { DirectoryService } from './services/DirectoryService';
import { NewsletterService } from './services/NewsletterService';
import { OrdersService } from './services/OrdersService';
import { ProductsService } from './services/ProductsService';
import { QuotesService } from './services/QuotesService';
import { SearchService } from './services/SearchService';
import { ViewService } from './services/ViewService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AmarantShopFrontendApiClient {
    public readonly ai: AiService;
    public readonly alias: AliasService;
    public readonly analytics: AnalyticsService;
    public readonly application: ApplicationService;
    public readonly attributes: AttributesService;
    public readonly blog: BlogService;
    public readonly carts: CartsService;
    public readonly categories: CategoriesService;
    public readonly checkout: CheckoutService;
    public readonly cms: CmsService;
    public readonly customers: CustomersService;
    public readonly directory: DirectoryService;
    public readonly newsletter: NewsletterService;
    public readonly orders: OrdersService;
    public readonly products: ProductsService;
    public readonly quotes: QuotesService;
    public readonly search: SearchService;
    public readonly view: ViewService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '2.30.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.ai = new AiService(this.request);
        this.alias = new AliasService(this.request);
        this.analytics = new AnalyticsService(this.request);
        this.application = new ApplicationService(this.request);
        this.attributes = new AttributesService(this.request);
        this.blog = new BlogService(this.request);
        this.carts = new CartsService(this.request);
        this.categories = new CategoriesService(this.request);
        this.checkout = new CheckoutService(this.request);
        this.cms = new CmsService(this.request);
        this.customers = new CustomersService(this.request);
        this.directory = new DirectoryService(this.request);
        this.newsletter = new NewsletterService(this.request);
        this.orders = new OrdersService(this.request);
        this.products = new ProductsService(this.request);
        this.quotes = new QuotesService(this.request);
        this.search = new SearchService(this.request);
        this.view = new ViewService(this.request);
    }
}

