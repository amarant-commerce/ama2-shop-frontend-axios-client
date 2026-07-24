"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmarantShopFrontendApiClient = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AiService_1 = require("./services/AiService");
const AliasService_1 = require("./services/AliasService");
const AnalyticsService_1 = require("./services/AnalyticsService");
const ApplicationService_1 = require("./services/ApplicationService");
const AttributesService_1 = require("./services/AttributesService");
const BlogService_1 = require("./services/BlogService");
const CartsService_1 = require("./services/CartsService");
const CategoriesService_1 = require("./services/CategoriesService");
const CheckoutService_1 = require("./services/CheckoutService");
const CmsService_1 = require("./services/CmsService");
const CustomersService_1 = require("./services/CustomersService");
const DirectoryService_1 = require("./services/DirectoryService");
const NewsletterService_1 = require("./services/NewsletterService");
const OrdersService_1 = require("./services/OrdersService");
const ProductsService_1 = require("./services/ProductsService");
const QuotesService_1 = require("./services/QuotesService");
const SearchService_1 = require("./services/SearchService");
const ViewService_1 = require("./services/ViewService");
class AmarantShopFrontendApiClient {
    constructor(config, HttpRequest = AxiosHttpRequest_1.AxiosHttpRequest) {
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
        this.ai = new AiService_1.AiService(this.request);
        this.alias = new AliasService_1.AliasService(this.request);
        this.analytics = new AnalyticsService_1.AnalyticsService(this.request);
        this.application = new ApplicationService_1.ApplicationService(this.request);
        this.attributes = new AttributesService_1.AttributesService(this.request);
        this.blog = new BlogService_1.BlogService(this.request);
        this.carts = new CartsService_1.CartsService(this.request);
        this.categories = new CategoriesService_1.CategoriesService(this.request);
        this.checkout = new CheckoutService_1.CheckoutService(this.request);
        this.cms = new CmsService_1.CmsService(this.request);
        this.customers = new CustomersService_1.CustomersService(this.request);
        this.directory = new DirectoryService_1.DirectoryService(this.request);
        this.newsletter = new NewsletterService_1.NewsletterService(this.request);
        this.orders = new OrdersService_1.OrdersService(this.request);
        this.products = new ProductsService_1.ProductsService(this.request);
        this.quotes = new QuotesService_1.QuotesService(this.request);
        this.search = new SearchService_1.SearchService(this.request);
        this.view = new ViewService_1.ViewService(this.request);
    }
}
exports.AmarantShopFrontendApiClient = AmarantShopFrontendApiClient;
