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
export class AmarantShopFrontendApiClient {
    constructor(config, HttpRequest = AxiosHttpRequest) {
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : '',
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : '2.30.0',
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : 'include',
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH,
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
